/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from './Chapter.module.scss';
import classnames from "classnames";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//import Headroom from "headroom.js";

const ChapterDefault = props => {

  useEffect(() => {
    setTimeout(function () {
    }, 1000)
  }, [])

  return (
    <section className="section section-chapter">
      <div className="section-inner">
        <div className={classnames("chapter", styles.container)}>
          <div className={classnames("chapter-inner row", styles.inner)}>
            {props.bodyLeft && <div className={classnames("body left col s12 m6 l6", styles.date)} dangerouslySetInnerHTML={{__html:props.bodyLeft}} />}
            {props.bodyRight && <div className={classnames("body right col s12 m6 l6", styles.date)} dangerouslySetInnerHTML={{__html:props.bodyRight}} />}
            {props.bodyBottom && <div className={classnames("body bottom col s12 m12 l12", styles.date)} dangerouslySetInnerHTML={{__html:props.bodyBottom}} />}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ChapterDefault;
