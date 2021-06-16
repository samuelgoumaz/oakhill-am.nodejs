/* components/cart/cart.js */
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AppContext from "../../../context/AppContext";
import styles from './Spinner.module.scss';
import spinner from "./loading.gif"
import classnames from "classnames";

function SpinnerWidget() {

  const appContext = useContext(AppContext);
  const router = useRouter();
  const { isAuthenticated, cart } = appContext;

  /* useState */
  //const [showContent, setShowContent] = useState(false);

  /* toggle */
  function toggle () {
    //setShowContent(!showContent);
  }

  return (
    <div className={classnames('loading-screen', styles.screen)}>
      <div className={classnames('loading-inner', styles.inner)}>
        <img className={classnames('spinner', styles.spinner)} src={spinner} />
      </div>
    </div>
  );
}
export default SpinnerWidget;
