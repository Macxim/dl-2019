import Layout from "../components/Layout";
import withData from "../lib/apollo";

import React from "react";
import App from "next/app";


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
export default withData(MyApp);