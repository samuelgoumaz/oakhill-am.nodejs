/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styles from './Section.module.scss';
import classnames from "classnames";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//import Headroom from "headroom.js";

const SectionDefault = props => {

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
    <section className="section section-sections">

        <div className="section-inner">

          {props.content.map((item, i) =>
            <Fade key={item.id} bottom>
              <div className={classnames("section row", styles.section)} id={item.menu}>
                  <div className={classnames("inner", styles.inner)} width="100%" height="auto">

                    {/**item.banner && <div className="background" style={{
                      backgroundImage: `url(${API_URL+`${item.banner.url}`})`,
                      backgroundCover: `cover`,
                      backgroundPosition: `center`,
                      opacity: 0.1
                    }}></div>**/}

                    <Fade left>
                      <div className={classnames("header", styles.header)}>
                        <h1 className={classnames("title", styles.title)}>
                          {item.icon && <span className={classnames("icon material-icons", styles.icon)}>{item.icon}</span>}
                          {item.title}
                        </h1>
                      </div>
                    </Fade>

                    <Fade left>
                      <div className={classnames("content", styles.content)}>
                        <div className={classnames("body", styles.body)} dangerouslySetInnerHTML={{__html:item.description}} />
                        <Link href="#">
                          <span className="button round material-icons">
                            arrow_downward
                          </span>
                        </Link>
                      </div>
                    </Fade>

                  </div>
              </div>
            </Fade>
          )}

        </div>

    </section>
  )
}
export default SectionDefault;
