import React from "react";
import Splash from '../components/Splash'
import { GetStaticProps } from "next";
import { SP } from "next/dist/shared/lib/utils";

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
        <Splash/>
    </>
  );
}
