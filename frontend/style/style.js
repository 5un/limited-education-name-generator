export default class extends React.Component {
  render() {
    return <style jsx>{`
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
        background: black;
        color: white;
      }
    `}</style>;
  }
}