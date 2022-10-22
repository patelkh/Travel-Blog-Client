import React from "react";
import styles from "./../styles/SinglePost.module.css";
import { useForm } from "react-hook-form";


export default function SinglePost({ blog, comments }) {
  const {register, reset, handleSubmit } = useForm();
  //(data) => console.log(JSON.stringify(data))
  const submitForm = async (data) => {
    try {
      console.log(JSON.stringify(data))
      const req = await fetch(
        `https://kays-travel-blog-api.herokuapp.com/blog/comment/${blog._id}`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (req.status !== 200) {
        return;
      }
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.details}>
        <div>
          <img className={styles.img} src={`data: blog/${blog.blogImage.contentType};base64, ${Buffer.from(blog.blogImage.data, 'utf-8').toString('base64')}`}/>
          <h1 className={styles.h1}>{blog.title}</h1>
          <h3>Author: {blog.author}</h3>
          <p>{blog.description}</p>
        </div>
        <div className={styles.comments}>
          <div>
            {" "}
            {comments.map((item) => {
              return (
                <div key={item._id} className={styles.comment}>
                  <h4>
                    {item.fname} {item.lname}
                  </h4>
                  <p> {item.comment} </p>
                </div>
              );
            })}
          </div>
          <div className={styles.commentForm}>
            <h2>Share your thoughts:</h2>
            <form onSubmit={handleSubmit(submitForm)}>
              <label hidden htmlFor="blog_id"></label>
              <input required {...register("blog_id")} type="hidden" value={blog._id}></input>
              <label htmlFor="fname">First Name: </label>
              <input required {...register("fname")} className={styles.fname} type="text"></input>
              <label  htmlFor="lname">Last Name: </label>
              <input {...register("lname")} className={styles.lname} name="lname" type="text"></input>
              <label htmlFor="comment">Comment: </label>
              <textarea required {...register("comment")} cols='1' rows='4' className={styles.textbox} name="comment" type="text"></textarea>
              <button className={styles.button} type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
