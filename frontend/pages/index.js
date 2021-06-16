import Head from 'next/head'
import Image from 'next/image'
import Gradient from '../components/gradient/Gradient.js'
import Sections from '../components/section/Section.js'
import Slide from 'react-reveal/Slide';
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import clipHorizontal from '../public/mask/mask_horizontal.png'
import clipVertical from '../public/mask/mask_vertical.png'
import { fetchQuery } from '../lib/_utils'
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

/*
# Class
*/
export default function Home({ homepage }) {
  return (
    <>
      <Head>
        <title>{homepage.title_seo ? `${homepage.title_seo} | ` : "" }OakHill | Asset Management - Geneva, Switzerland</title>
        {homepage.description_seo && <meta name="description" content={homepage.description_seo} />}
      </Head>
      <section className="page">
        <div className="page-inner">

          {/* background cover */}
          <div className="gradient">
            <div className="cover">
              <Fade left>
                {/**<Gradient id="branding" mask={clipHorizontal} />**/}
              </Fade>
            </div>
          </div>

          {/* banner */}
          <section className="section section-banner">
            <Fade top>
              <div className="section-inner">
                <div className="background">
                  <div className="cover">
                    <video autoPlay muted loop>
                      <source src={API_URL+homepage.banner.url} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </Fade>
          </section>

          {/* title */}
          <section className="section section-title">
            <Fade right>
            <div className="section-inner row">
              <div className="col col-title s12 m12 l12">
                <h1 className="title">Asset Management</h1>
              </div>
            </div>
            </Fade>
          </section>

          {/* banner */}
          <section className="section section-header">
            <Fade left>
              <div className="section-inner row">
                <div className="col col-title s3 m3 l3">
                  <address>
                    <h2>OakHill SA</h2><br />
                    Rue Verdaine 11 1204<br />
                    Genève, Switzerland
                  </address>
                </div>
                <div className="col col-content s6 m6 l6">
                  <Link href="#">
                    <span className="button round material-icons">
                      arrow_downward
                    </span>
                  </Link>
                </div>
                <div className="col col-aside s3 m3 l3">
                  <address>
                    <h2>Contact</h2><br />
                    +41 22 310 00 86<br />
                    info@oakhill-am.com
                  </address>
                </div>
              </div>
            </Fade>
          </section>

          {/* section page */}
          <Sections content={homepage.section} />
          {console.log(homepage.section)}


        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const homepage = await fetchQuery('homepage');

  return {
    props: {
      homepage,
    }
  }
}
