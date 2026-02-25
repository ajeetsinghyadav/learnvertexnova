import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/105563321?v=4';
const GITHUB_URL = 'https://github.com/vertexnova';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ajeet-yadav-b1133991/';
const STRYKER_URL = 'https://www.stryker.com/us/en/joint-replacement/systems/Mako_SmartRobotics_Overview.html';
const IITK_URL = 'https://www.iitk.ac.in';

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
        <ul className={styles.pointList}>
          <li>Principal Engineer at <Link href={STRYKER_URL}>Stryker</Link> (USA) — Mako SmartRobotics</li>
          <li>Graduate of <Link href={IITK_URL}>Indian Institute of Technology, Kanpur</Link></li>
          <li>Creator of VertexNova — a personal learning project in computer graphics and engine architecture</li>
          <li><strong>Expertise:</strong> C/C++, 3D Visualization</li>
        </ul>
        <div className={styles.links}>
          <Link href={GITHUB_URL} className={styles.link}>GitHub</Link>
          <Link href={LINKEDIN_URL} className={styles.link}>LinkedIn</Link>
        </div>
      </div>
    </div>
  );
}
