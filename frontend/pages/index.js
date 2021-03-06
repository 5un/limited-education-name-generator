import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import BackgroundVideo from '../components/background-video'
import SponsorBar from '../components/sponsor-bar'
import StepsIndicator from '../components/steps-indicator'
import FontSelector from '../components/font-selector'
import trasformName from '../services/transform-name'
import generateImage from '../services/generate-image'
import shareImage from '../services/share-image'
import Isvg from 'react-inlinesvg';
import { Helmet } from 'react-helmet';
import FacebookProvider, { Share } from 'react-facebook';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'
import configFonts from '../config/fonts';
import _ from 'lodash';
import ReactGA from 'react-ga';


const sharedImageBaseUrl = 'https://s3.amazonaws.com/photocampaign-storage/';
const siteUrl = 'https://www.limitededucation.org';
const MAX_CHARS = 15;
const latinAlphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

const greyhoundHeaderStyle = {
  width: '165px',
  height: '34px',
  margin: '20px auto 75px auto',
};
const limitedEducationHeaderStyle = {
  width: '175px',
  height: '91px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '75px',
};
const eventModeLabelStyle = {
  background: 'red',
  color: 'white',
  position: 'fixed',
  left: '10px',
  top: '10px',
  padding: '5px',
  fontSize: '16px',
  borderRadius: '20px'
}

export default class extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { step: 0, inputName: '' };
  }

  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  componentDidMount() {
    ReactGA.initialize('UA-72985104-5');
    ReactGA.pageview(document.location.pathname);
  }

  onGotoStep1Click() {
    const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';
    const availableFonts = eventMode ? _.filter(configFonts, 'showInEvent') : configFonts;
    if(!this.state.haveLatinAlpha && this.state.outputName.length > 0){
      this.setState({ step: 1, selectedFont: availableFonts[0], availableFonts });
    }
  }

  onGotoStep2Click() {
    const selectedFont = this.state.selectedFont;
    this.setState({ step: 2 });
    if(this.state.outputName.length > 0){
      generateImage(this.state.outputName, { fontFamily: selectedFont.fontFamily, childrenName: selectedFont.fullname  }, (imgUrl) => {
        const imageBase64String = imgUrl.split(',').pop();
        this.setState({ 
          step: 3,
          outputImageUrl: imgUrl,
        });
        // shareImage(imageBase64String, (err, sharedId) => {
        //   if (err) {
        //     // Handle error
        //     alert('Failed to upload share image');
        //   } else {
        //     this.setState({ 
        //       step: 3,
        //       outputImageUrl: imgUrl,
        //       sharedLink: `${siteUrl}/?shareid=${sharedId}`,
        //       sharedId: sharedId,
        //       sharedImageUrl: `${sharedImageBaseUrl}${sharedId}.jpg`,
        //     });
        //   }
        // });
      });
    }
    
  }

  onTextNameChage(e) {
    const val = e.target.value;
    const stripAlpha = val.replace(/[a-z]/gi, '');
    const haveLatinAlpha = (val.length !== 0) && (val.length !== stripAlpha.length);
    const outputName = trasformName(stripAlpha);
    this.setState({ inputName: val, outputName, haveLatinAlpha });
  }

  onFontSelected(font) {
    this.setState({ selectedFont: font });
  }

  onBackClick() {
    this.setState({ step: 0, inputName: '', outputName: '' });
  }

  // Deprecated
  onShareClick() {
    const imgUrl = this.state.outputImageUrl;
    const imageBase64String = imgUrl.split(',').pop();
    this.setState({ shareLoading: true });
    shareImage(imageBase64String, (err, sharedId) => {
      this.setState({ shareLoading: false });
      if (err) {
        // Handle error
        alert('Failed to upload share image');
      } else {
        const sharedLink = `${siteUrl}/?shareid=${sharedId}`;
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${sharedLink}&redirect_uri=${siteUrl}/thankyou`;
        window.open(shareUrl, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        Router.push('/thankyou');
      }
    });
  }

  renderBackButton() {
    return (<a className="btn btn-default full-width margin-bottom-20" onClick={this.onBackClick.bind(this)} href="#">ย้อนกลับ</a>);
  }

  renderDownloadButton() {
    return (<a className="btn btn-default full-width margin-bottom-20" href={this.state.outputImageUrl} download="output.jpg">โหลด</a>);
  }

  renderShareButton() {
    return (<div>
      {/* <FacebookProvider appId="649567235238332" redirectURI={`${siteUrl}/thankyou`}>
        <Share href={this.state.sharedLink} hashtag="LimitedEducation">
          <button className="btn btn-blue-2 full-width" type="button" >แชร์</button>
        </Share>
      </FacebookProvider>
      */}
      {/*
      <a className="btn btn-default full-width margin-bottom-20" href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.sharedLink}&redirect_uri=${siteUrl}/thankyou`} target="_blank" onClick={this.onShareClick.bind(this)}>แชร์</a>
      */}
      <button className="btn btn-default full-width margin-bottom-20" onClick={this.onShareClick.bind(this)}>{ this.state.shareLoading ? 'กำลังแชร์' : 'แชร์' }</button>
    </div>);
  }

  renderDonateButton() {
    return (<div>
      <a className="btn btn-default full-width margin-bottom-20" href="https://taejai.com/th/d/limited_education/">บริจาค</a>
    </div>);
  }

  renderPreorderButton() {
    const shareId = _.get(this.state, 'sharedId');
    const { selectedFont, inputName, outputName } = this.state;
    const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';
    const eventKey = _.get(this.props, 'url.query.key', '');
    const eventQueries = eventMode ? `&mode=event&key=${eventKey}` : ''; 
    return (<div>
      <a href={`/preorder?shareid=${shareId}&inputName=${inputName}&outputName=${outputName}&fontName=${selectedFont.name}${eventQueries}`} className="btn btn-yellow full-width margin-bottom-20">ร่วมบริจาคและรับเสื้อ</a><br/>
      **สำหรับยอดบริจาค 550.- บาท เป็นต้นไปรับเสื้อที่ระลึก
    </div>);
  }

  renderConfirmationButton() {
    const shareId = _.get(this.state, 'sharedId');
    const { selectedFont, inputName, outputName } = this.state;
    return (<div>
      <a href={`/preorder?shareid=${shareId}&inputName=${inputName}&outputName=${outputName}&fontName=${selectedFont.name}&mode=confirmation`} className="btn btn-default full-width margin-bottom-20" style={{ fontSize: '28px', lineHeight: '28px' }}>บริจาคแล้ว<br />ต้องการยืนยันการรับเสื้อ</a>
    </div>);
  }

  render () {
    const shareId = _.get(this.props, 'url.query.shareid');
    const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';

    return <div>
      <Helmet>
        <title>Limited Education</title>
        <meta name="description" content="มีเด็กไทยมากกว่า 140,000 คนที่อ่านหนังสือไม่ออก และ 270,000 คนที่เขียนหนังสือไม่ได้ คุณเองสามารถช่วยกัน ดีไซน์ การศึกษาในประเทศของเราให้ดีขึ้นได้" />
        {shareId ?
          <meta property="og:url" content={`siteUrl?shareid=${shareId}`} /> :
          <meta property="og:url" content={siteUrl} />
        }
        <meta property="og:type" content="website" />
        <meta property="og:title" content="คุณคิดว่าเด็กจะออกแบบชื่อคุณเป็นอย่างไร?" />
        <meta property="og:description" content="คุณก็สามารถร่วมเป็นอีกหนึ่งพลังในการสร้างโอกาสทางการศึกษาให้กับน้องๆได้ง่ายๆเพียงแค่คลิก" />
        {shareId ?
          <meta property="og:image" content={`${sharedImageBaseUrl}${shareId}.jpg`} /> :
          <meta property="og:image" content="https://s3.amazonaws.com/photocampaign-storage/limited_website_share.jpg" />
        }
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      {/*
        <BackgroundVideo />
      */}
      <div className="page-container">
        <Container
          style={{
            maxWidth: 1170,
          }}
        >
        {(this.state.step === 0) && 
          <div>
            <div style={greyhoundHeaderStyle}>
              <Isvg src="/static/images/logo-greyhound-white.svg" ></Isvg>
            </div>
            <div style={limitedEducationHeaderStyle}>
              <Isvg src="/static/images/logo-limited-education-white.svg"></Isvg>
            </div>
            <div className="input-name-container">
              <input type="text" className="input-name" onChange={this.onTextNameChage.bind(this)} placeholder="โปรดใส่ชื่อของคุณในช่อง..." maxLength={MAX_CHARS} /><br />
            </div>
            {!this.state.haveLatinAlpha && <span>ระบบใช้เฉพาะภาษาไทยเท่านั้นนะคะ</span>}
            {this.state.haveLatinAlpha && <span style={{ color: 'red' }}>ระบบใช้เฉพาะภาษาไทยเท่านั้นนะคะ</span>}
            <br />
            <span>ความยาวของชื่อ {this.state.inputName.length} / {MAX_CHARS} อักขระ</span>
            <br /><br />
            <Breakpoint maxWidth={700} widthMethod="componentWidth">
              <button className="btn btn-yellow" onClick={this.onGotoStep1Click.bind(this)}>แสดงผล</button>
            </Breakpoint>
            <Breakpoint minWidth={700} widthMethod="componentWidth">
              <button className="btn btn-yellow" onClick={this.onGotoStep1Click.bind(this)}>แสดงผล</button>
            </Breakpoint>
            <div>
              <p>
              คุณรู้รึเปล่าว่า...มีเด็กไทยมากกว่า<br/>
              140,000 คนที่อ่านหนังสือไม่ออก และ 270,000 คนที่เขียนหนังสือไม่ได้<br/>
              <span>#LimitedEducation</span>
              </p>
            </div>
          </div>
        }
        {(this.state.step === 1) &&
          <div>
            <StepsIndicator />
            <div style={{ marginTop: '40px' }}>
            <FontSelector 
              selectedFont={this.state.selectedFont}
              fonts={this.state.availableFonts}
              onFontSelected={this.onFontSelected.bind(this)} />
            </div>
            <button className="btn btn-yellow" onClick={this.onGotoStep2Click.bind(this)}>แสดงผล</button>
          </div>
        }
        {(this.state.step === 2) && 
          <div>
            <div style={limitedEducationHeaderStyle}>
              <Isvg src="/static/images/logo-limited-education-white.svg"></Isvg>
            </div>
            <div>
              <div className="loader"/>
              <div>LOADING...</div>
            </div>
            
          </div>
        }
        {(this.state.step === 3) && 
          <div>
            <div style={limitedEducationHeaderStyle}>
              <Isvg src="/static/images/logo-limited-education-white.svg"></Isvg>
            </div>
            <img src={this.state.outputImageUrl} className="preview-generated-image"/><br />
            <div>
              <p>คุณเองก็สามารถช่วยกัน ดีไซน์ การศึกษาของประเทศของเราให้ดีขึ้นได้<br />
              ด้วยการช่วยกันแชร์ต่อให้มีคนรู้เรื่องนี้มากขึ้น หรือช่วยกันสนับสนุนเงินบริจาค<br />
              เงินทุกบาทจะนำไปช่วยการศึกษาของน้อง...และอาจทำให้น้องๆเขียนชื่อคุณได้ถูกต้องในอนาคต<br />
              </p>
            </div>
            <div>
              <Breakpoint maxWidth={700} widthMethod="componentWidth">
                {!eventMode && this.renderDownloadButton()}
                {!eventMode && this.renderShareButton()}
                {this.renderPreorderButton()}
                {!eventMode && this.renderConfirmationButton()}
              </Breakpoint>
              <Breakpoint minWidth={700} widthMethod="componentWidth">
                <Grid columns={12} style={{ width: eventMode ? '30%' : '100%', margin: 'auto' }}>
                  <Span columns={3}>
                    {!eventMode && this.renderDownloadButton()}
                  </Span>
                  <Span columns={3}>
                    {!eventMode && this.renderShareButton()}
                  </Span>
                  <Span columns={eventMode ? 12 : 3}>
                    {this.renderPreorderButton()}
                  </Span>
                  <Span columns={3} last>
                    {!eventMode && this.renderConfirmationButton()}
                  </Span>
                </Grid>
              </Breakpoint>
              <button onClick={this.onBackClick.bind(this)} className="btn btn-transparent">กลับไปทำใหม่</button>
            </div>
          </div>
        }
        </Container>
      </div>
      {eventMode &&
        <div style={eventModeLabelStyle}>EVENT MODE</div>
      }
    </div>
  }

}
