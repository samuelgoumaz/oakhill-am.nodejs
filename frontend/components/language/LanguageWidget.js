/* components/cart/cart.js */
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AppContext from "../../../context/AppContext";
import styles from './LanguageWidget.module.scss';
import classnames from "classnames";

import ButtonCursor from '../../cursor/lib/Button';
import HandlerCursor from '../../cursor/lib/Handler';

function LanguageWidget() {

  const appContext = useContext(AppContext);
  const router = useRouter();
  const { isAuthenticated, cart } = appContext;

  /* useState */
  const [showContent, setShowContent] = useState(false);

  /* toggle */
  function toggle () {
    setShowContent(!showContent);
  }

  return (
    <div id="language-widget" className={classnames('widget', styles.container)}>

      <div className={classnames('widget-toggle', styles.handler)} active={showContent ? "true" : "false"} onClick={toggle}>
        <HandlerCursor>
          <a className="material-icons">language</a>
        </HandlerCursor>
      </div>
      <div className={classnames('widget-content', styles.content)} active={showContent ? "true" : "false"}>
        <div className={classnames('widget-inner', styles.inner)}>
          <ul className="menu">
            <li className="item" onClick={toggle}>
              <ButtonCursor icon="translate" active="true"><Link href="#">fr</Link></ButtonCursor>
            </li>
            <li className="item" onClick={toggle}>
              <ButtonCursor icon="translate"><Link href="#">de</Link></ButtonCursor>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
export default LanguageWidget;
