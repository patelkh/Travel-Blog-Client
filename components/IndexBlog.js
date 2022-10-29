import React from "react";
import styles from "./../styles/BlogList.module.css";
import Link from "next/link";

export default function IndexBlog({ blog }) {
  return (
    <>
      <Link href={`/blog/${blog._id}`}>
        <div className={styles.blog} key={blog._id}>
          <div>
            <h2 className={styles.h1}>{blog.title}</h2>
            <p className={styles.p}>{blog.author}</p>
          </div>
          <div>
            <button className={styles.button}>View Post</button>
          </div>
        </div>
      </Link>
    </>
  );
}
