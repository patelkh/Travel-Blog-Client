import React from "react";
import IndexBlog from "./IndexBlog";
import styles from "./../styles/BlogList.module.css";

export default function BlogList({ blogs }) {
  return (
    <>
    <ul className={styles.blogList}>
      {blogs.map((blog) => {
        return <IndexBlog key={blog._id} blog={blog} />;
      })}
    </ul>
    </>
  );
}
