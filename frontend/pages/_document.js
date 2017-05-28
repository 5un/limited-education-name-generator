// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>

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

          body {
            background-color: black;
            background-image: url('/static/images/bg-student.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            color: white;
            text-align: center;
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
            font-size: 100px;
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
            border-radius: 4px;
            padding: 0px 40px;
            margin-bottom: 20px;
          }

          .btn-blue {
            background: #034ea1;
            color: white;
          }

          input.input-name {
            min-width: 320px;
            max-width: 100%;
          }

          img.preview-generated-image {
            border: 2px solid #eee;
            max-width: 600px;
            max-height: 315px;
          }

          .footer {
            margin-top: 50px;
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