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
              <Link href="#homepage">
                Accueil
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="#strategy">
                Stratégie
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="#method">
                Méthode
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="#services">
                Services
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="#partners">
                Partners
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href="#contact">
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
