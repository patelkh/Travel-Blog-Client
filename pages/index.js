import React from "react";
import { GetStaticProps } from "next";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://kays-travel-blog-api.herokuapp.com/blogs/view"
  );
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
};

export default function Blog({ blogs }) {
  return (
    <>
  
    </>
  );
}
