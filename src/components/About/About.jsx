import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Tentang</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer | Fullstack Developer | Mobile Developer</h3>
              <p>
              Saya seorang pengembang frontend dengan pengalaman dalam membangun responsif
              dan situs yang dioptimalkan
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer | web Developer</h3>
              <p>
              Saya memiliki pengalaman mengembangkan sistem back-end yang cepat dan optimal
              dan API
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer | Desain Grafis</h3>
              <p>
              Saya telah merancang beberapa halaman arahan dan telah membuat desain
              sistem juga
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
