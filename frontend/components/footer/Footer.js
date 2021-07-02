/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styles from './Footer.module.scss';
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
    <footer id="footer">
      <div className="footer-inner row">
        <div className="col col-left s12 m6 l6" dangerouslySetInnerHTML={{__html:props.content.company}}>

        </div>
        <div className="col col-right s12 m6 l6" dangerouslySetInnerHTML={{__html:props.content.contact}}>

        </div>
      </div>
    </footer>
  )
}
export default PartnersDefault;
