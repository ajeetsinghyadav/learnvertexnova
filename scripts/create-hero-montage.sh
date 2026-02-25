#!/usr/bin/env bash
#
# Combine clips from multiple demo videos into one hero background montage.
# Requires: ffmpeg
# Run from repo root: ./scripts/create-hero-montage.sh
#
# Output: static/img/demos/hero_montage.mp4

set -e

DEMOS_DIR="static/img/demos"
OUTPUT="$DEMOS_DIR/hero_montage.mp4"
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR" EXIT

# Target: 1280x720, 4 seconds per clip
WIDTH=1280
HEIGHT=720
DURATION=4

# Demos to include (file, optional start offset in seconds)
# Format: "filename:start" or just "filename" (starts at 0)
CLIPS=(
  "04_DemoCube.mp4:0"
  "12_DemoLighting.mp4:0"
  "15_DemoDeferred.mp4:0"
  "14_DemoShadows.mp4:0"
  "18_DemoPBRDirectWeb.mp4:0"
)

echo "Creating hero montage from ${#CLIPS[@]} demo clips..."

for i in "${!CLIPS[@]}"; do
  entry="${CLIPS[$i]}"
  file="${entry%%:*}"
  start="${entry##*:}"
  start="${start:-0}"
  src="$DEMOS_DIR/$file"
  out="$TEMP_DIR/clip_$(printf "%02d" $i).mp4"

  if [[ ! -f "$src" ]]; then
    echo "Warning: $src not found, skipping"
    continue
  fi

  echo "  Extracting $DURATION s from $file (start: ${start}s)..."
  ffmpeg -y -ss "$start" -i "$src" -t "$DURATION" \
    -vf "scale=$WIDTH:$HEIGHT:force_original_aspect_ratio=decrease,pad=$WIDTH:$HEIGHT:(ow-iw)/2:(oh-ih)/2,setsar=1" \
    -r 30 -c:v libx264 -preset fast -crf 23 -an \
    "$out" 2>/dev/null
done

# Build concat list
CONCAT_LIST="$TEMP_DIR/concat.txt"
for f in "$TEMP_DIR"/clip_*.mp4; do
  [[ -f "$f" ]] && echo "file '$f'" >> "$CONCAT_LIST"
done

if [[ ! -s "$CONCAT_LIST" ]]; then
  echo "Error: No clips were created. Check that demo files exist in $DEMOS_DIR"
  exit 1
fi

echo "Concatenating clips..."
ffmpeg -y -f concat -safe 0 -i "$CONCAT_LIST" \
  -c:v libx264 -preset fast -crf 21 -an \
  "$OUTPUT" 2>/dev/null

echo "Done: $OUTPUT"
ls -lh "$OUTPUT"
