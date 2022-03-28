import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import Headroom from "headroom.js";
import MenuWidget from "../menu/MenuWidget.js";
import LanguageWidget from "../language/LanguageWidget.js";

export default function Layout(props) {
  const { locale, locales, asPath } = useRouter();

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
          <div className="col s2 m2 l2 col-label">
          </div>
          <div className="col s8 m8 l8 col-branding">
            <Link href={`/${locale}`}>
              <img src="/assets/oakhill.svg" width="auto" height="30px" />
            </Link>
          </div>
          <div className="col s2 m2 l2 col-menu">
            <LanguageWidget />
            {/**<Link href="/">
              <div className="social material-icons">call</div>
            </Link>**/}
          </div>
        </div>
      </header>

      {/* Navigation */} <nav id="navigation" role="navigation">
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
