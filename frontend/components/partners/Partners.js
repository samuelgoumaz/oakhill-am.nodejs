/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styles from './Partners.module.scss';
import classnames from "classnames";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//import Headroom from "headroom.js";

const PartnersDefault = props => {

  useEffect(() => {
    setTimeout(function () {
    }, 1000)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <>
      {/** sections **/}
      <section className="section section-sections" id="partners">
        <div className="section-inner">
          <Fade bottom>
            <div className={classnames("section row", styles.section)}>
                <div className={classnames("inner", styles.inner)} width="100%" height="auto">


                  <Fade left>
                    <div className={classnames("content", styles.content)}>
                      <div className={classnames("body", styles.body)} dangerouslySetInnerHTML={{__html:props.content.description}} />
                      <Link href="#">
                        <span className="button round material-icons">
                          arrow_downward
                        </span>
                      </Link>
                    </div>
                  </Fade>


                  <div className={classnames("header", styles.header)}>
                    <h1 className={classnames("title", styles.title)}>
                      <span className={classnames("icon material-icons", styles.icon)}>people</span>
                      {props.content.title}
                    </h1>
                  </div>

                  {props.content.banner && <div className={classnames("background", styles.background)}>
                    <div className={classnames("cover", styles.cover)} />
                  </div>}

                </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="section section-partners">
        <div className="section-inner row">

          {props.elements.map((item, i) =>
            <div key={item.id} className={classnames("partner col s6 m3 l3", styles.section)}>
              <div className={classnames("partner-inner", styles.inner)} width="100%" height="auto">

                {item.branding && <div className={classnames("background", styles.background)}>
                  <div className={classnames("cover", styles.cover)} style={{
                    backgroundImage: `url(${API_URL+item.branding.url})`
                  }} />
                </div>}

              </div>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
export default PartnersDefault;
