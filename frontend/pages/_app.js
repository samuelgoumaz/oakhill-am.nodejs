/*
# name : _app.js
# css module : ...
# context : /context/AppContext.js, ../lib/apollo
# author : SG
# v : 1.0
*/

/*
# Import
*/

/* Basics Importation */
import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import Layout from "../components/parts/Layout";
import Progress from "../components/progress/Progress.js"

/*
# Api Importation */
import { fetchAPI } from "../lib/api";

/*
# Apollo Importation */
import { getDataFromTree } from "react-apollo";
import withData from "../lib/apollo";
import initApollo from "../lib/apollo.js";

/*
# Animation Importation */
import { AnimateSharedLayout } from "framer-motion";

/*
# Styles */
import '../styles/styles.scss'

/*
# Import variables */
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
export const GlobalContext = createContext({});

/*
# Class
*/
const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <GlobalContext.Provider value={global}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

/*
# GetInitialProps
*/
MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return {
    ...appProps,
  }
};

export default MyApp;
