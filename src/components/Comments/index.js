import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comments() {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--ifm-color-emphasis-200)' }}>
      <Giscus
        repo="ajeetsinghyadav/learnvertexnova"  // Change to your repo
        repoId=""  // Get from giscus.app
        category="Comments"  // Create this category in Discussions
        categoryId=""  // Get from giscus.app
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
