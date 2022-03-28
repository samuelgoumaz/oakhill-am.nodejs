/* components/cart/cart.js */
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AppContext from "../../context/AppContext";
import styles from './LanguageWidget.module.scss';
import classnames from "classnames";

function LanguageWidget() {

  const appContext = useContext(AppContext);
  const router = useRouter();
  //const { isAuthenticated, cart } = appContext;

  /* useState */
  const [showContent, setShowContent] = useState(false);

  /* toggle */
  function toggle () {
    setShowContent(!showContent);
  }

  return (
    <div id="language-widget" className={classnames('widget', styles.container)}>

      <div className={classnames('widget-toggle', styles.handler)} active={showContent ? "true" : "false"} onClick={toggle}>
        <a className="material-icons">language</a>
      </div>
      <div className={classnames('widget-content', styles.content)} active={showContent ? "true" : "false"}>
        <div className={classnames('widget-inner', styles.inner)}>
          <ul className="menu">
            <li className="item" onClick={toggle}>
              <Link href="/en" onClick={() => appContext.languageSwitcher("en")}>en</Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="/fr" onClick={() => appContext.languageSwitcher("fr")}>fr</Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
export default LanguageWidget;
