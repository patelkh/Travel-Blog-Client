import React, {Children} from "react";
import Head from "next/head";

export default function Layout({children}) {
  return (
    <>
    <main>{children}</main>
    </>
  )
}
