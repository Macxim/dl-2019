import React from "react";
import Head from "next/head";
import Link from "next/link";
import Logo from "./Logo";
import ArrowContact from "./Icons/arrowContact";
import "normalize.css";
import "../style.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { children } = this.props;
    const title = "Denis Lefèvre - Designer";
    return (
      <div className="dl-app">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header className="header">
          <a className="logo-wrapper" href="/">
            <Logo></Logo>
            <div className="logo-label">denis<br/>lefèvre</div>
          </a>
          <Link href="/about">
            <a className="header-link header-link-about">About.</a>
          </Link>
        </header>

        {children}

        <footer className="footer">
          <ul className="social">
            <li className="social-item"><a className="social-link" href="" target="_blank">Tw</a></li>
            <li className="social-item"><a className="social-link" href="" target="_blank">In</a></li>
            <li className="social-item"><a className="social-link" href="" target="_blank">Be</a></li>
          </ul>

          <div className="footer-work-status">
            <a href="">
              <div className="footer-work-status-label">
                I am<br/>
                available<br/>
                for work.
              </div>
              <ArrowContact/>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;