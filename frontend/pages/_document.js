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

            body {
              background-color: black;
              background-image: url('/static/images/bg-student.jpg');
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              color: white;
              text-align: center;
              font-family: DBHelvethaicaXRegular;
              font-size: 36px;
              min-height: 100vh;
            }

            .page-container {
              position: absolute;
              width: 100%;
              left:0;
              top:0;
            }

            .page-header {
              font-family: limited_education;
              font-size: 80px;
              margin-bottom: 0;
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
              border: 4px solid rgba(255,255,255,0.5);
              max-width: calc(100% - 40px);
              width: 600px;
              margin: auto;
              margin-bottom: 20px;
              border-radius: 4px;
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

            .btn-default {
              border-radius: 4px;
              background: #bcbec1;
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
              padding: 40px 20px;
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