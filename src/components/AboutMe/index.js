import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/105563321?v=4';
const GITHUB_URL = 'https://github.com/vertexnova';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ajeet-yadav-b1133991/';

export default function AboutMe() {
  return (
    <div className={styles.card}>
      <img
        src={AVATAR_URL}
        alt="Ajeet Yadav"
        className={styles.avatar}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>Ajeet Yadav</h3>
        <p className={styles.bio}>
          Principal Engineer at Stryker (USA). Graduate of Indian Institute of Technology, Kanpur. Creator of VertexNova — a personal learning project in computer graphics and engine architecture.
        </p>
        <div className={styles.links}>
          <Link href={GITHUB_URL} className={styles.link}>GitHub</Link>
          <Link href={LINKEDIN_URL} className={styles.link}>LinkedIn</Link>
        </div>
      </div>
    </div>
  );
}
