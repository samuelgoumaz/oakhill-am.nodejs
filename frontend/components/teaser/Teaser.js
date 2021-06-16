/* components/Header.js */
import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Moment from 'moment';
import styles from './Teaser.module.scss';
import classnames from "classnames";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//import Headroom from "headroom.js";

const TeaserDefault = props => {
  Moment.locale('fr');
  let months = "";

  useEffect(() => {
    setTimeout(function () {
    }, 1000)
  }, [])

  return (
    <section className="section section-teaser">
      <div className="section-inner">
          {props.content.map((item, i) =>
            <div className={classnames("teaser", styles.container)}>
              <div className={classnames("teaser-inner", styles.inner)}>
                {item.date && <h4 className={classnames("date", styles.date)}>{Moment(item.date).format('MMMM YYYY')}</h4>}
                {item.title && <h2 className={classnames("title", styles.title)}>{item.title}</h2>}
                {item.description && <div className={classnames("body", styles.date)} dangerouslySetInnerHTML={{__html:item.description}} />}
              </div>
            </div>
          )}
      </div>
    </section>
  )
}
export default TeaserDefault;
