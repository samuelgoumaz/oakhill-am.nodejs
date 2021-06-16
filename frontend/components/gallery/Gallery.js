/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Slick from "react-slick";
import styles from './Gallery.module.scss';
import classnames from "classnames";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//import Headroom from "headroom.js";

const GalleryDefault = props => {

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
    <section className="section section-gallery">
      <div className="section-inner">
        <Slick {...settings}>
          {props.content.map((item, i) =>
            <div className={classnames("gallery row", styles.container)}>
              <div className={classnames("col s12 m8 l8 image large", styles.imageLarge)} width="100%" height="auto">
                <img src={`${API_URL}${item.image_large.url}`} />
                <div className={classnames("details", styles.details)}>
                  <h2>cat {item.reference}</h2>
                  <h3>{item.title}</h3>
                  <h4>{item.material}<br />{item.dimension}</h4>
                </div>
              </div>
              <div className={classnames("col s12 m4 l4 image top", styles.imageTop)}>
                <img src={`${API_URL}${item.image_top.url}`} width="100%" height="auto" />
              </div>
              <div className={classnames("col s12 m4 l4 image bottom", styles.imageBottom)}>
                <img src={`${API_URL}${item.image_bottom.url}`} width="100%" height="auto" />
              </div>
            </div>
          )}
        </Slick>
      </div>
    </section>
  )
}
export default GalleryDefault;
