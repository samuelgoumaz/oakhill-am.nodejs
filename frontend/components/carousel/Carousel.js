/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Slick from "react-slick";
import styles from './Carousel.module.scss';
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
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
    <section className="section section-carousel">
      <div className="section-inner">
        <Slick {...settings}>
          {props.content.map((item, i) =>
            <div className={classnames("carousel", styles.container)}>

              <div className={classnames("border", styles.border)} />

              <Link as={`/collections/${item.id}`} href={`/collections/[id]`}>
              <div style={{
                backgroundImage: `url(${API_URL+item.image.url})`,
                backgroundSize: `cover`
              }} className={classnames("background", styles.background)} />
              </Link>


              <Link as={`/collections/${item.id}`} href={`/collections/[id]`}>
              <div className={classnames("header", styles.header)}>
                <h2 className={classnames("title", styles.title)}>{item.name}</h2>
                <span className={classnames("material-icons", styles.icon)}>add</span>
              </div>
              </Link>

            </div>
          )}
        </Slick>
      </div>
    </section>
  )
}
export default SliderDefault;
