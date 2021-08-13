/* components/cart/cart.js */
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './MenuWidget.module.scss';
import classnames from "classnames";

function MenuWidget() {

  const router = useRouter();

  /* useState */
  const [showContent, setShowContent] = useState(false);

  /* toggle */
  function toggle () {
    setShowContent(!showContent);
  }

  return (
    <div id="menu-widget" className={classnames('widget', styles.container)}>

      <div className={classnames('widget-toggle', styles.handler)} active={showContent ? "true" : "false"} onClick={toggle}>
        <span className="material-icons">{showContent ? "close" : "menu"}</span>
      </div>

      <div className={classnames('widget-content', styles.content)} active={showContent ? "true" : "false"}>
        <div className={classnames('widget-inner', styles.inner)}>

          {/** Menu **/}
          <ul className={classnames('menu', styles.menu)}>
            <li className="item" onClick={toggle}>
              <Link href="/">
                Accueil
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="/pages/1">
                Entreprise
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="/pages/2">
                Activité
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="/pages/3">
                Plateforme
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="/pages/4">
                Processus d'investissement
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="/pages/5">
                Fonds de placements
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="/pages/6">
                Pré-IPO
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="/pages/7">
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </div>

    </div>
  );
}
export default MenuWidget;
