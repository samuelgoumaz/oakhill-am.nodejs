import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Image from 'next/image';
import Gradient from '../../components/gradient/Gradient.js';
import Sections from '../../components/section/Section.js';
import Mtv from '../../components/mtv/MarketTimingView.js';
import Partners from '../../components/partners/Partners.js';
import Services from '../../components/services/Services.js';
import Footer from '../../components/footer/Footer.js';
import Slide from 'react-reveal/Slide';
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import AppContext from '../../context/AppContext'
import { fetchAPI } from "../../lib/api";
import classnames from "classnames";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const Page = ({ page, pages, footer, mtv, partner, brandings }) => {
  const appContext = useContext(AppContext);
  const { locale, locales, asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{page.title_seo ? `${page.title_seo} | ` : "" }OakHill | Asset Management - Geneva, Switzerland</title>
        {page.description_seo && <meta name="description" content={page.description_seo} />}
      </Head>
      <section className="page">
        <div className="page-inner">

          {/* banner */}
          {page.banner && <section className="section section-banner">
              <div className="section-inner">

                <div className="background">
                  <Fade bottom>
                  <div className="cover" style={{
                    backgroundImage: `url(${API_URL+page.banner.url})`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                  }}/>
                  </Fade>

                  <Fade left>
                    <div className={classnames("header")}>
                      <div className="header-inner">
                        <h4 className={classnames("number")}>
                        </h4>
                        <h1 className={classnames("title")}>
                          {page.title}
                        </h1>
                      </div>
                    </div>
                  </Fade>

                </div>
              </div>
          </section>}

          <section className="section section-main">

            {page.background && <div className="background" style={{
              backgroundImage: `url(${API_URL+`${page.background.url}`})`,
              backgroundCover: `cover`,
              backgroundPosition: `center`,
              opacity: 0.25,
              filter: "blur(5px)"
            }}></div>}

            <div className="section-inner">

              {/* section page */}
              <Sections key="sections" content={page.section} />

                {/* Market Timing View */}
                {page.id == 15 || page.id == 10 ? <Mtv content={mtv} /> : ""}

                {/* Partners */}
                {page.id == 14 || page.id == 8 ? <Partners key="partners" content={partner} elements={brandings} /> : ""}

                {/* Footer */}
                <Footer key="footer" content={footer} />
            </div>
          </section>

        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { locale } = context;

  let translation = false;
  let translationMtv = false;
  let translationPartner = false;

  const page = await fetchAPI(`/pages/${id}`);
  const pages = await fetchAPI("/pages");
  const footer = await fetchAPI('/footer');
  const mtv = await fetchAPI(`/mtv?_locale=${locale}`);
  const partner = await fetchAPI(`/partner?_locale=${locale}`);
  const brandings = await fetchAPI('/brandings');

  if (locale != page.locale) {
    const translationRes = await fetchAPI(
      `/pages/${page.localizations[0].id}`
    );
    translation = await translationRes;
  }


  return {
    props: {
      page: translation ? translation : page,
      pages: pages,
      footer: footer,
      mtv: mtv,
      partner: partner,
      brandings: brandings,
    },
  };
};

export default Page;
