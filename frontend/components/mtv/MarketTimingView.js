/* components/Header.js */
import React, { useEffect, useContext, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Slick from "react-slick";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styles from './MarketTimingView.module.scss';
import classnames from "classnames";
import schema from '../../public/assets/oakhill-slide-3.png'
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
import {isMobile} from 'react-device-detect';

//import Headroom from "headroom.js";

const MarketTimingViewDefault = props => {

  const [fundamental, setFundamental] = useState(String);
  const [technical, setTechnical] = useState(String);
  let slider = useRef();

  const getSlide0 = e => {
    slider.current.slickGoTo(0);
  };

  const getSlide1 = e => {
    slider.current.slickGoTo(1);
  };

  const getSlide2 = e => {
    slider.current.slickGoTo(2);
  };

  const getSlide3 = e => {
    slider.current.slickGoTo(3);
  };

  const getSlide4 = e => {
    slider.current.slickGoTo(4);
  };

  const getSlide5 = e => {
    slider.current.slickGoTo(5);
  };

  const getSlide6 = e => {
    slider.current.slickGoTo(5);
  };

  useEffect(() => {
    setTimeout(function () {
    }, 1000)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    autoplay: 3000,
    speed: 1500,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="section section-mtv">
      <div className="section-inner row">

        <div className={classnames("col col-menu s12 m8 l9", styles.colMenu)}>

          {/* header */}
          <div className="header">
            {props.content.title && <h1 className="title">{props.content.title}</h1>}
            {props.content.description && <div className={classnames("body", styles.description)} dangerouslySetInnerHTML={{__html:props.content.description}} />}
            {<a href="/oakhill-mtv.pdf" target="_blank" className="button-download">Market Timing View</a>}
          </div>

          {/* menu
          <ul className={classnames("menu", styles.menu)}>
            <li className="item" onClick={getSlide0}>
              <a>
                {props.content.invest_process_title}
              </a>
            </li>
            <li className="item" onClick={getSlide1}>
              <a>
                {props.content.fundamental_title}
              </a>
            </li>
            <li className="item" onClick={getSlide2}>
              <a>
                {props.content.technical_title}
              </a>
            </li>
            <li className="item" onClick={getSlide3}>
              <a>
                {props.content.processing_title}
              </a>
            </li>
            <li className="item" onClick={getSlide4}>
              <a>
                {props.content.signals_title}
              </a>
            </li>
            <li className="item" onClick={getSlide5}>
              <a>
                {props.content.monitoring_title}
              </a>
            </li>
          </ul>
          */}
        </div>

        <div className={classnames("col col-slider s12 m12 l12", styles.menu)}>
          {/**<div className="background" style={{
            backgroundImage: `url(${API_URL+props.content.banner.url})`
          }} />**/}
          {/**<Slick ref={slider}>**/}

            <div id="invest-process" className={classnames("slide part", styles.part)}>
              <div className={classnames("part-inner", styles.inner)}>
                <h2 className={classnames("part-title", styles.title)}>{props.content.invest_process_title}</h2>
                <div className={classnames("part-content row", styles.inner)} style={{
                  backgroundImage: `url(/assets/oakhill-slide-1.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "40%",
                  backgroundPosition: "center"
                }}>
                  <div className={classnames("col s4 m4 l4")}>
                    <Fade left>
                      <div className={classnames("ball left")}>
                        <h4 className={classnames("title")}>{props.content.invest_process_left}</h4>
                      </div>
                    </Fade>
                  </div>
                  <div className={classnames("col s4 m4 l4")}>
                    <Fade top>
                      <div className={classnames("ball top")}>
                        <h4 className={classnames("title")}>{props.content.invest_process_top}</h4>
                      </div>
                    </Fade>

                    <Slide bottom>
                      <div className={classnames("ball center")}>
                        <h4 className={classnames("title")}>{props.content.invest_process_center}</h4>
                      </div>
                    </Slide>

                    <Fade bottom>
                      <div className={classnames("ball bottom")}>
                        <h4 className={classnames("title")}>{props.content.invest_process_bottom}</h4>
                      </div>
                    </Fade>

                  </div>
                  <div className={classnames("col s4 m4 l4")}>
                    <Fade right>
                      <div className={classnames("ball right")}>
                        <h4 className={classnames("title")}>{props.content.invest_process_right}</h4>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>

            <div id="fundamental" className={classnames("slide part", styles.part)}>
              <div className={classnames("part-inner", styles.inner)}>
                <h2 className={classnames("part-title", styles.title)}>Fundamentals</h2>
                <div className={classnames("part-content row", styles.inner)}>

                  <Slide top>
                    <div className={classnames("col col-left s6 m6 l6", styles.cols)}>
                      <div onClick={e => setFundamental("top")} className={classnames("demi-round top", styles.demiRound, fundamental == "top" ? "active" : "")}>
                        <span className={classnames("title")}>{props.content.fundamental_top_title}</span>
                      </div>
                      <div className={classnames("clear", styles.clear)} />
                      <div onClick={e => setFundamental("bottom")} className={classnames("demi-round bottom", styles.demiRound, fundamental == "bottom" ? "active" : "")}>
                        <span className={classnames("title")}>{props.content.fundamental_bottom_title}</span>
                      </div>
                    </div>
                  </Slide>

                  <Slide bottom>
                    <div className={classnames("col col-right s6 m6 l6", styles.cols)}>
                      <div onClick={e => setFundamental("right")} className={classnames("demi-round top", styles.demiRound, fundamental == "right" ? "active" : "")}>
                        <span className={classnames("title")}>{props.content.fundamental_right_title}</span>
                      </div>
                      <div className={classnames("clear", styles.clear)} />
                      <div onClick={e => setFundamental("left")} className={classnames("demi-round bottom", styles.demiRound, fundamental == "left" ? "active" : "")}>
                        <span className={classnames("title")}>{props.content.fundamental_left_title}</span>
                      </div>
                    </div>
                  </Slide>

                  {fundamental == "right" && <div className={classnames("popup")} dangerouslySetInnerHTML={{__html:props.content.fundamental_right_body}} />}

                  {fundamental == "top" && <div className={classnames("popup")} dangerouslySetInnerHTML={{__html:props.content.fundamental_top_body}} />}

                  {fundamental == "bottom" && <div className={classnames("popup")}
                  dangerouslySetInnerHTML={{__html:props.content.fundamental_bottom_body}} />}

                  {fundamental == "left" && <div className={classnames("popup")} dangerouslySetInnerHTML={{__html:props.content.fundamental_left_body}} />}

                </div>
              </div>
            </div>

            <div id="fundamental-technical" className={classnames("slide part", styles.part)}>
              <div className={classnames("part-inner", styles.inner)}>
                <h2 className={classnames("part-title", styles.title)}>Fundamentals & Technicals</h2>
                <div className={classnames("part-content row", styles.inner)}>

                  <Slide bottom>
                    <div className={classnames("col col-left s6 m6 l6", styles.cols)}>
                      <div onClick={e => setTechnical("top")} className={classnames("demi-round top", styles.demiRound, technical == "top" ? "active" : "")}>
                        <span className={classnames("title")} dangerouslySetInnerHTML={{__html:props.content.technical_top_title}} />
                      </div>
                      <div className={classnames("clear", styles.clear)} />
                      <div onClick={e => setTechnical("bottom")} className={classnames("demi-round bottom", styles.demiRound, technical == "bottom" ? "active" : "")}>
                        <span className={classnames("title")}
                        dangerouslySetInnerHTML={{__html:props.content.technical_bottom_title}} />
                      </div>
                    </div>
                  </Slide>

                  <Slide top>
                    <div className={classnames("col col-right s6 m6 l6", styles.cols)}>
                      <div onClick={e => setTechnical("left")} className={classnames("demi-round top", styles.demiRound, technical == "left" ? "active" : "")}>
                        <span className={classnames("title")} dangerouslySetInnerHTML={{__html:props.content.technical_left_title}} />
                      </div>
                      <div className={classnames("clear", styles.clear)} />
                      <div onClick={e => setTechnical("right")} className={classnames("demi-round bottom", styles.demiRound, technical == "right" ? "active" : "")}>
                        <span className={classnames("title")}
                        dangerouslySetInnerHTML={{__html:props.content.technical_right_title}} />
                      </div>
                    </div>
                  </Slide>

                  {technical == "right" && <div className={classnames("popup")} dangerouslySetInnerHTML={{__html:props.content.technical_right_body}} />}

                  {technical == "top" && <div className={classnames("popup")} dangerouslySetInnerHTML={{__html:props.content.technical_top_body}} />}

                  {technical == "bottom" && <div className={classnames("popup")}
                  dangerouslySetInnerHTML={{__html:props.content.technical_bottom_body}} />}

                  {technical == "left" && <div className={classnames("popup")} dangerouslySetInnerHTML={{__html:props.content.technical_left_body}} />}

                </div>
              </div>
            </div>

            <div id="data-processing" className={classnames("slide part", styles.part)}>
              <div className={classnames("part-inner", styles.inner)}>
                <h2 className={classnames("part-title", styles.title)}>Data Processing</h2>

                <div className={classnames("part-content row", styles.inner)}>

                  <Slide top>
                    <div className={classnames("col s4 m4 l4 category")}>
                      <span className="icon material-icons">content_copy</span>
                      Top picks
                    </div>

                    <div className={classnames("col s4 m4 l4 category")}>
                      <span className="icon material-icons">leaderboard</span>
                      Market Datas
                    </div>

                    <div className={classnames("col s4 m4 l4 category")}>
                      <span className="icon material-icons">room</span>
                      Tech indicators
                    </div>
                  </Slide>

                  <div className={classnames("lines top")} />

                  <Slide left>
                    <div className={classnames("col s12 m12 l12 circle")}  style={{
                      backgroundImage: `url(/assets/oakhill-mtv.svg)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "350px",
                      backgroundPosition: "center"
                    }}>
                    </div>
                  </Slide>

                  <div className={classnames("lines bottom")} />

                  <Fade top>
                    <div className={classnames("col bottom s4 m4 l4 category")}>
                      <span className="icon">
                        <img width="60%" height="auto" className="schema" src={`/assets/compare.svg`} style={{
                          margin: "0 auto"
                        }} />
                      </span>
                      Signal
                    </div>

                    <div className={classnames("col bottom s4 m4 l4 category")}>
                      <span className="icon material-icons">show_chart</span>
                      Graph
                    </div>

                    <div className={classnames("col bottom s4 m4 l4 category")}>
                      <span className="icon">long<br/>short</span>
                      Strategy
                    </div>
                  </Fade>
                </div>

              </div>
            </div>

            <div id="signals" className={classnames("slide part", styles.part)}>
              <div className={classnames("part-inner", styles.inner)}>
                <h2 className={classnames("part-title", styles.title)}>Signals</h2>
                <div className={classnames("part-content row", styles.inner)}>
                  <div className={classnames("col-top col s6 m6 l6")}>
                    <Fade top>
                      <div className={classnames("signal")}>
                        <span className="top">NEUTRAL NEGATIVE</span>
                        <span className="bottom">NEGATIVE</span>
                        <span className="left">POSITIVE</span>
                        <span className="right">NEUTRAL POSITIVE</span>
                        <span className="center">Index</span>
                      </div>
                    </Fade>
                  </div>
                  <div className={classnames("col-top col s6 m6 l6")}>
                    <Fade top>
                      <div className={classnames("signal")}>
                        <span className="top">NEUTRAL NEGATIVE</span>
                        <span className="bottom">NEGATIVE</span>
                        <span className="left">POSITIVE</span>
                        <span className="right">NEUTRAL POSITIVE</span>
                        <span className="center">EQUITIES ETF</span>
                      </div>
                    </Fade>
                  </div>
                  <div className={classnames("col-center col s12 m12 l12")}>
                    <div className={classnames("signal")}>

                      <Fade top>
                        <span className="top">Index</span>
                      </Fade>

                      <Fade bottom>
                        <span className="bottom">EQUITIES ETF</span>
                      </Fade>

                      <Fade left>
                        <span className="left">COMMODITIES</span>
                      </Fade>

                      <Fade right>
                        <span className="right">CURRENCIES</span>
                      </Fade>
                      <span className="center">MTV Signals</span>
                    </div>
                  </div>
                  <div className={classnames("col-bottom col s6 m6 l6")}>
                    <Fade bottom>
                      <div className={classnames("signal")}>
                        <span className="top">NEUTRAL NEGATIVE</span>
                        <span className="bottom">NEGATIVE</span>
                        <span className="left">POSITIVE</span>
                        <span className="right">NEUTRAL POSITIVE</span>
                        <span className="center">CURRENCIES</span>
                      </div>
                    </Fade>
                  </div>
                  <div className={classnames("col-bottom col s6 m6 l6")}>
                    <Fade bottom>
                      <div className={classnames("signal")}>
                        <span className="top">NEUTRAL NEGATIVE</span>
                        <span className="bottom">NEGATIVE</span>
                        <span className="left">POSITIVE</span>
                        <span className="right">NEUTRAL POSITIVE</span>
                        <span className="center">COMMODITIES</span>
                      </div>
                    </Fade>
                  </div>



                </div>
              </div>
            </div>

            <div id="strategy-monitoring" className={classnames("slide part", styles.part)}>
              <div className={classnames("part-inner", styles.inner)}>
                <h2 className={classnames("part-title", styles.title)}>Strategy & Monitoring</h2>
                <div className={classnames("part-content row", styles.inner)}>

                  <Slide top>
                    <div className={classnames("col s12 m6 l6", styles.inner)}>
                      <img width="100%" height="auto" className="schema" src={`/assets/oakhill-arrows.svg`} />
                    </div>
                  </Slide>

                  <Slide bottom>
                  <div className={classnames("col s12 m6 l6", styles.inner)}>
                    <div className={classnames("col s12 m12 l12 lines")}>
                      <h6>Scenario</h6>
                      <div className={classnames("row content")}>
                        <div className={classnames("col-left col s4 m4 l4")}>
                          NEUTRAL / BEAR
                        </div>
                        <div className={classnames("col-center col material-icons s4 m4 l4")}>
                          arrow_downward
                        </div>
                        <div className={classnames("col-right col s4 m4 l4")}>
                          NEUTRAL / BULL
                        </div>
                      </div>
                    </div>

                    <div className={classnames("col s12 m12 l12 lines")}>
                      <h6>INVESTMENT PROFILE</h6>
                      <div className={classnames("row content")}>
                        <div className={classnames("col col-left s4 m4 l4")}>
                          LOW-MODERATE RISK
                        </div>
                        <div className={classnames("col col-center col material-icons s4 m4 l4")}>
                          arrow_downward
                        </div>
                        <div className={classnames("col col-right s4 m4 l4")}>
                          MEDIUM-HIGH RISK
                        </div>
                      </div>
                    </div>

                    <div className={classnames("col s12 m12 l12 lines")}>
                      <h6>PORTFOLIO</h6>
                      <div className={classnames("row content")}>
                        <div className={classnames("col col-left s4 m4 l4")}>
                          MANDATE
                        </div>
                        <div className={classnames("col col-center col material-icons s4 m4 l4")}>
                          arrow_downward
                        </div>
                        <div className={classnames("col col-right s4 m4 l4")}>
                          ADVISORY
                        </div>
                      </div>
                    </div>

                    <div className={classnames("col s12 m12 l12")}>
                      <img width="75%" height="auto" src={`/assets/hopper.svg`} style={{
                        margin: "0 auto",
                        display: "block"
                      }} />
                    </div>

                    <div className={classnames("col s12 m12 l12 text")}>
                      <h2>Follow up</h2>
                      <div className={classnames("col s12 m12 l12 content")}>
                        <p>Monitoring real time / hedging / arbitrage / yield pick up / daily checking of performance attribution and adequation between risk and investment profile</p>
                      </div>
                    </div>
                  </div>
                  </Slide>

                </div>
              </div>
            </div>
          {/**</Slick>**/}
        </div>
      </div>
    </section>
  )
}
export default MarketTimingViewDefault;
