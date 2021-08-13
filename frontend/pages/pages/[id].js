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
import { fetchAPI } from "../../lib/api";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const Page = ({ page, pages, footer, mtv, partner, brandings }) => {
  return (
    <>
      <Head>
        <title>{page[0].title_seo ? `${page[0].title_seo} | ` : "" }OakHill | Asset Management - Geneva, Switzerland</title>
        {page[0].description_seo && <meta name="description" content={page[0].description_seo} />}
      </Head>
      <section className="page">
        <div className="page-inner">

        {/* header */}
        <section className="section-header">
          <div className="section-inner row">
            <div className="col s6 m6 l6 col-branding">
              <Link href="/">
                <img className="logotype" src={"/assets/branding.svg"} />
              </Link>
                <h1 className="branding"><Link href="/">OakHill</Link></h1>
            </div>
            <div className="col s6 m6 l6 col-tools">
              <ul className="language">
                <li>FR</li>
                <li>EN</li>
              </ul>
            </div>
          </div>
        </section>


          {/* banner */}
          {page[0].banner && <section className="section section-banner">
            <Fade top>
              <div className="section-inner">
                <div className="background">
                  <div className="cover" style={{
                    backgroundImage: `url(${API_URL+page[0].banner.url})`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                  }}/>
                </div>
              </div>
            </Fade>
          </section>}

          {/* title */}
          <section className="section section-title compact">
            <Fade right>
            <div className="section-inner row">
              <div className="col col-title s12 m12 l12">
                <h1 className="title">{page[0].title}</h1>
              </div>
            </div>
            </Fade>
          </section>

          {/* Market Timing View */}
          {page[0].id == 4 && <Mtv content={mtv} />}

          {/* section page */}
          <Sections key="sections" content={page[0].section} />

          {/* Partners */}
          {page[0].id == 1 && <Partners key="partners" content={partner} elements={brandings} />}

          {/* Footer */}
          <Footer key="footer" content={footer} />

        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const pages = await fetchAPI("/pages");

  return {
    paths: pages.map((item) => ({
      params: {
        id: String(item.id),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = await fetchAPI(
    `/pages?id=${params.id}`
  );

  const pages = await fetchAPI("/pages");
  const footer = await fetchAPI('/footer');
  const mtv = await fetchAPI('/mtv');
  const partner = await fetchAPI('/partner');
  const brandings = await fetchAPI('/brandings');

  return {
    props: {
      page: page,
      pages: pages,
      footer: footer,
      mtv: mtv,
      partner: partner,
      brandings: brandings,
    },
    revalidate: 1,
  };
}

export default Page;
