import React from "react";
import SinglePost from "../../components/SinglePost";

export default function BlogDetails(props) {
  console.log(`props: ${props}`)
  return (
      <SinglePost blog={props.blog} comments={props.comments}/>
  );
}

//DYNAMIC ROUTING
export const getStaticPaths = async () => {
  const res = await fetch("https://kays-travel-blog-api.herokuapp.com/blogs/view")
  const data = await res.json()
  const paths = data.map(blog => `/blog/${blog._id}`);
  console.log(`paths: ${paths}`)
  return {paths, fallback: false}
}

export const getStaticProps = async({params}) => {
  //params={blogId: 'blog._id'} [blogId].js
  console.log(params) 
  const res = await fetch(`https://kays-travel-blog-api.herokuapp.com/blog/${params.blogId}`)
  const blog = await res.json()
  console.log(blog)
  const commentRes = await fetch(`https://kays-travel-blog-api.herokuapp.com/blog/comments/${params.blogId}`)
  const comments = await commentRes.json()
  return {
    props: {blog, comments}
  }
}

//DO NOT DELETE CODE FOR SERVER SIDE RENDERING
// export const getServerSideProps = async (context) => {
//   const id  = context.query.blogId;
//   const res = await fetch(
//     `https://kays-travel-blog-api.herokuapp.com/blog/${id}`
//   );
//   const blog = await res.json();
//   // console.log(blog);
  
//   const commentRes = await fetch(
//     `https://kays-travel-blog-api.herokuapp.com/blog/comments/${id}`
//   )
//   const comments = await commentRes.json()
//   console.log(comments)
  
//   return {
//     props: {blog, comments}
//   };
// };

