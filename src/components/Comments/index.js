import React from 'react';
import Link from '@docusaurus/Link';

export default function Comments() {
  return (
    <div
      style={{
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
      }}>
      <p style={{ marginBottom: '0.5rem' }}>
        Questions or ideas? Create a discussion, open an issue, or suggest a feature in the relevant repository.
      </p>
      <Link href="https://github.com/orgs/vertexnova/discussions">
        VertexNova Discussions →
      </Link>
    </div>
  );
}
