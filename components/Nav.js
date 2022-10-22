import React from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles.a}>Blog</a></Link>
    </nav>
  );
};
