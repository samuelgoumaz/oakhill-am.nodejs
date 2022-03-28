/* components/Header.js */
import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styles from './Panel.module.scss';
import classnames from "classnames";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//import Headroom from "headroom.js";

const PanelDefault = props => {
  const { locale, locales, asPath } = useRouter();

  useEffect(() => {
    setTimeout(function () {
    }, 1000)
  }, [])

  return (
    <section className="section section-panels">

        <div className="section-inner row">

          {props.content.sort((a, b) => a.order > b.order ? 1 : -1).map((item, i) =>
            <Fade key={item.id} top={i % 2 === 1 ? "true": "false"}>
                <div className={classnames("panel col s12 m2 l2")} style={{
                  backgroundImage: `url(${API_URL+item.banner.url})`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                }}>
                  <Link href={`/pages/[id]`} as={`/${locale}/pages/${item.id}`}>
                    <div className={classnames("inner", styles.inner)} width="100%" height="auto">
                      <div className={classnames("header", styles.header)}>
                        <div className="header-inner">
                          <h4 className={classnames("number", styles.title)}>
                            {i+1}
                          </h4>
                          <h1 className={classnames("title", styles.title)}>
                            {item.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
            </Fade>
          )}

        </div>

    </section>
  )
}
export default PanelDefault;
