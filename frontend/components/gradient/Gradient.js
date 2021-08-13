/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Slick from "react-slick";
import styles from './Gradient.module.scss';
import classnames from "classnames";
import * as THREE from 'three'
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//import Headroom from "headroom.js";

const GradientDefault = props => {

  let myCanvas = React.createRef();
  let myMask = React.createRef();
  let width = 0;
  let height = 0;

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function rgb(r, g, b) {
    return new THREE.Vector3(r, g, b);
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <div id="homepage" className={classnames("gradient-content", styles.content)} style={{
        maskImage: `url(${props.mask})`
      }}>
        <img src="/assets/oakhill.svg" />
      </div>
    </>
  )
}
export default GradientDefault;
