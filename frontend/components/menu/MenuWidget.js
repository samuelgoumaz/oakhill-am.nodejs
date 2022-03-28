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
              {locale === "en" ? <Link href={`/`} as={`/en`}>Home</Link> : <Link href={`/`} as={`/fr`}>Accueil</Link>}
            </li>
            <li className="item" onClick={toggle}>
              {locale === "en" ? <Link href={`/pages/[id]`} as={`/en/pages/7`}>Business</Link> : <Link href={`/pages/[id]`} as={`/fr/pages/13`}>Entreprise</Link>}
            </li>
            <li className="item" onClick={toggle}>
              {locale === "en" ? <Link href={`/pages/[id]`} as={`/en/pages/8`}>Activities</Link> : <Link href={`/pages/[id]`} as={`/fr/pages/14`}>Activités</Link>}
            </li>
            <li className="item" onClick={toggle}>
              {locale === "en" ? <Link href={`/pages/[id]`} as={`/en/pages/9`}>Plateform</Link> : <Link href={`/pages/[id]`} as={`/fr/pages/14`}>Plateforme</Link>}
            </li>
            <li className="item" onClick={toggle}>
              {locale === "en" ? <Link href={`/pages/[id]`} as={`/en/pages/10`}>Investment process</Link> : <Link href={`/pages/[id]`} as={`/fr/pages/15`}>Processus d'investissement</Link>}
            </li>
            <li className="item" onClick={toggle}>
              {locale === "en" ? <Link href={`/pages/[id]`} as={`/en/pages/6`}>Pre-IPO</Link> : <Link href={`/pages/[id]`} as={`/fr/pages/17`}>Pre-IPO</Link>}
            </li>
          </ul>

        </div>
      </div>

    </div>
  );
}
export default MenuWidget;
