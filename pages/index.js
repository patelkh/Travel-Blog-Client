import React from "react";
import Splash from "../components/Splash";
import { GetStaticProps } from "next";
import BlogList from "../components/BlogList";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://kays-travel-blog-api.herokuapp.com/blogs/view"
  );
  const blogs = await res.json();
  // console.log(blogs);
  return {
    props: {
      blogs,
    },
  };
};

export default function Blog({ blogs }) {
  // console.log(`Blogs: ${blogs}`)
  return (
    <>
    <Splash />
    <BlogList blogs={blogs} />    
    </>
  );
}
