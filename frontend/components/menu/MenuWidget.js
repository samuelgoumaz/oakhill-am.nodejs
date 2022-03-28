/* components/cart/cart.js */
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from './MenuWidget.module.scss';
import classnames from "classnames";

function MenuWidget() {
  const { locale, locales, asPath } = useRouter();
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
              <Link href={`/${locale}/pages/8`}>
                Entreprise
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href={`/${locale}/pages/7`}>
                Activité
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href={`/${locale}/pages/9`}>
                Plateforme
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href={`/${locale}/pages/10`}>
                Processus d'investissement
              </Link>
            </li>
            <li className="item" onClick={toggle}>
              <Link href={`/${locale}/pages/6`}>
                Pré-IPO
              </Link>
            </li>
          </ul>

        </div>
      </div>

    </div>
  );
}
export default MenuWidget;
