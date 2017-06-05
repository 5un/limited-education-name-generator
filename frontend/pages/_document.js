// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { Helmet } from "react-helmet";
import _ from 'lodash';

export default class MyDocument extends Document {
  static async getInitialProps (...args) {
    // const {html, head, errorHtml, chunks} = renderPage()
    // const styles = flush()
    // return { html, head, errorHtml, chunks, styles }
    const documentProps = await super.getInitialProps(...args)
    return { ...documentProps, helmet: Helmet.rewind() }
  }

  // should render on <html>
  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
        .filter(el => el !== 'htmlAttributes') // remove htmlAttributes which is not for <head> but for <html>
        .map(el => this.props.helmet[el].toComponent())
        .filter(el => !_.isEmpty(el))
  }

  get helmetJsx () {
    return (<Helmet
      htmlAttributes={{lang: 'en'}}
      title='Hello next.js!'
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />)
  }

  render () {
    return (
     <html {...this.helmetHtmlAttrComponents}>
       <Head>
          { this.helmetJsx }
          { this.helmetHeadComponents }
          <style global jsx>
           {`
            @font-face {
              font-family: 'DBHelvethaicaXRegular';
              src: url('/static/fonts/db_helvethaica_x_v3.2-webfont.eot');
              src: url('/static/fonts/db_helvethaica_x_v3.2-webfont.eot?#iefix') format('embedded-opentype'),
                   url('/static/fonts/db_helvethaica_x_v3.2-webfont.woff2') format('woff2'),
                   url('/static/fonts/db_helvethaica_x_v3.2-webfont.woff') format('woff'),
                   url('/static/fonts/db_helvethaica_x_v3.2-webfont.ttf') format('truetype'),
                   url('/static/fonts/db_helvethaica_x_v3.2-webfont.svg#DBHelvethaicaXRegular') format('svg');
              font-weight: normal;
              font-style: normal;

            }

            @font-face {
              font-family: 'DBHelvethaicaXUltraLight';
              src: url('/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.eot');
              src: url('/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.eot?#iefix') format('embedded-opentype'),
                   url('/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.woff2') format('woff2'),
                   url('/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.woff') format('woff'),
                   url('/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.ttf') format('truetype'),
                   url('/static/fonts/db_helvethaica_x_ulli_v3.2-webfont.svg#DBHelvethaicaXUltraLight') format('svg');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'limited_education';
              src: url('/static/fonts/limited_education-webfont.eot');
              src: url('/static/fonts/limited_education-webfont.eot?#iefix') format('embedded-opentype'),
                   url('/static/fonts/limited_education-webfont.woff2') format('woff2'),
                   url('/static/fonts/limited_education-webfont.woff') format('woff'),
                   url('/static/fonts/limited_education-webfont.ttf') format('truetype'),
                   url('/static/fonts/limited_education-webfont.svg#limited_education') format('svg');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'le-patiparn';
              src: url('/static/fonts/patiparn-webfont.eot');
              src: url('/static/fonts/patiparn-webfont.eot?#iefix') format('embedded-opentype'),
                   url('/static/fonts/patiparn-webfont.woff2') format('woff2'),
                   url('/static/fonts/patiparn-webfont.woff') format('woff'),
                   url('/static/fonts/patiparn-webfont.ttf') format('truetype'),
                   url('/static/fonts/patiparn-webfont.svg#patiparnpatiparn') format('svg');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'le-suradech';
              src: url('/static/fonts/suradech-webfont.eot');
              src: url('/static/fonts/suradech-webfont.eot?#iefix') format('embedded-opentype'),
                   url('/static/fonts/suradech-webfont.woff2') format('woff2'),
                   url('/static/fonts/suradech-webfont.woff') format('woff'),
                   url('/static/fonts/suradech-webfont.ttf') format('truetype'),
                   url('/static/fonts/suradech-webfont.svg#suradechsuradech') format('svg');
              font-weight: normal;
              font-style: normal;

            }
            
            @font-face {
              font-family: 'le-tanapon';
              src: url('/static/fonts/tanapon-webfont.eot');
              src: url('/static/fonts/tanapon-webfont.eot?#iefix') format('embedded-opentype'),
                   url('/static/fonts/tanapon-webfont.woff2') format('woff2'),
                   url('/static/fonts/tanapon-webfont.woff') format('woff'),
                   url('/static/fonts/tanapon-webfont.ttf') format('truetype'),
                   url('/static/fonts/tanapon-webfont.svg#tanaponregular') format('svg');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'le-tanatorn';
              src: url('/static/fonts/tanatorn-webfont.eot');
              src: url('/static/fonts/tanatorn-webfont.eot?#iefix') format('embedded-opentype'),
                   url('/static/fonts/tanatorn-webfont.woff2') format('woff2'),
                   url('/static/fonts/tanatorn-webfont.woff') format('woff'),
                   url('/static/fonts/tanatorn-webfont.ttf') format('truetype'),
                   url('/static/fonts/tanatorn-webfont.svg#tanatorntanatorn') format('svg');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'le-tang';
              src: url('/static/fonts/tang-webfont.eot');
              src: url('/static/fonts/tang-webfont.eot?#iefix') format('embedded-opentype'),
                   url('/static/fonts/tang-webfont.woff2') format('woff2'),
                   url('/static/fonts/tang-webfont.woff') format('woff'),
                   url('/static/fonts/tang-webfont.ttf') format('truetype'),
                   url('/static/fonts/tang-webfont.svg#tangregular') format('svg');
              font-weight: normal;
              font-style: normal;
            }

            body {
              margin: 0;
              padding: 0;
              border: 0;
              background-color: black;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              color: white;
              text-align: center;
              font-family: DBHelvethaicaXUltraLight;
              font-size: 24px;
              min-height: 100vh;
            }

            b, strong {
              font-family: DBHelvethaicaXRegular;
              font-weight: normal;
            }

            .page-container {
              width: 100%
            }

            .page-header {
              font-family: limited_education;
              font-size: 80px;
              font-weight: normal;
              margin-bottom: 0;
            }

            @media (max-width: 600px) {
              .page-header {
                font-size: 60px;
              }
            }
            
            .sub-header-svg {
              width: 400px;
              text-align: center;
              margin: auto;
              margin-bottom: 20px;
            }

            input, button, a.btn {
              border: none; 
              height: 60px;
              font-size: 36px;
              font-family: DBHelvethaicaXRegular;
            }

            .input-name-container {
              background: rgba(255,255,255,0.1);
              max-width: 80%;
              width: 600px;
              margin: 0 auto 20px auto;
              border-radius: 4px;
              padding: 5px;
            }

            .input-name {
              border: 1px solid white;
              border-radius: 4px;
              background: transparent;
              color: white;
            }

            input[type="text"] {
              width: calc(100% - 40px);
              padding: 0 20px;
            }

            button, a.btn {
              display: inline-block;
              text-decoration: none;
              padding: 0px 40px;
              line-height: 60px;
              cursor: pointer;
            }

            .btn-default, a.btn-default {
              background: transparent;
              color: white;
              border: 1px solid white;
              transition: background-color 0.5s;
            }

            .btn-default:hover {
              background-color: rgba(255, 255, 255, 0.3);
            }

            .btn-yellow {
              background: #f9cb0b;
              color: white;
              transition: background-color 0.5s;
            }

            .btn-yellow:hover {
              background: #ffdb43;
              color: white;
            }

            .btn-blue-1 {
              border-radius: 4px;
              background: #2a96cc;
              color: white;
            }

            .btn-blue-2 {
              border-radius: 4px;
              background: #005cb9;
              color: white;
            }

            .btn-blue-3 {
              border-radius: 4px;
              background: #034784;
              color: white;
            }

            a.full-width, button.full-width {
              padding-left: 0;
              padding-right: 0;
              width: 100%;
            }

            input.input-name {
              min-width: 320px;
            }

            img.preview-generated-image {
              border: 2px solid #eee;
              max-width: calc(100% - 20px);
              width: 600px;
              max-height: 315px;
            }

            .footer {
              margin-top: 50px;
            }

            .margin-bottom-20 {
              margin-bottom: 20px;
            }

          `}
        </style>
       </Head>
       <body className="custom_class">
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}