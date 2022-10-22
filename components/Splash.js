import React from "react";
import styles from "./../styles/Splash.module.css";

export default function Splash() {
  return (
    <>
      <div className={styles.splash}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Explore destinations</h1>
          <p className={styles.p}>
            Read and share ideas from independent voices, world-class
            publications, and experts from around the globe.
          </p>
        </div>
      </div>
    </>
  );
}
