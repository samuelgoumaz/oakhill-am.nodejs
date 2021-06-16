/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Slick from "react-slick";
import styles from './Slider.module.scss';
import classnames from "classnames";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//import Headroom from "headroom.js";

const SliderDefault = props => {

  useEffect(() => {
    setTimeout(function () {
    }, 1000)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    autoplay: 3000,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="section section-slider">
      <div className="section-inner">
        <Slick {...settings}>
          {props.content.slider.map((item, i) =>
            <div className={classnames("slide", styles.container)}>
              <div style={{
                backgroundImage: `url(${API_URL+item.image.url})`,
                backgroundSize: `cover`
              }} className={classnames("background", styles.background)} />
            </div>
          )}
        </Slick>
      </div>
    </section>
  )
}
export default SliderDefault;
