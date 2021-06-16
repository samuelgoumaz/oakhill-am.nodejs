import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import Headroom from "headroom.js";
import MenuWidget from "../menu/MenuWidget.js";

export default function Layout(props) {

  useEffect(() => {

    /* headroom */
    var myHeader = document.querySelector("header");
    var headroom  = new Headroom(myHeader);
    headroom.init();

  },[]);

  return (
    <>

      {/* Head */} <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header */} <header id="header" className="headroom">
        <div className="header-inner row">
          <div className="col s6 m6 l6 col-branding">
            <Link href="/">
              <img width="auto" height="30px" />
            </Link>
          </div>
          <div className="col s6 m6 l6 col-menu">
          </div>
        </div>
      </header>

      {/* Navigation */} <nav id="navigaion" role="navigaion">
        <div className="nav-inner row">

          {/* Menu */} <div className="col s12 m12 l12 col-menu">
            <MenuWidget />
          </div>
        </div>
      </nav>

      {/* Main */}
      <main id="main" className="main">
        {props.children}
      </main>
    </>
  )
}
