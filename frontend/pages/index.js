import React from 'react'
import Router from 'next/router'
import BackgroundVideo from '../components/background-video'
import SponsorBar from '../components/sponsor-bar'
import StepsIndicator from '../components/steps-indicator'
import FontSelector from '../components/font-selector'
import trasformName from '../services/transform-name'
import generateImage from '../services/generate-image'
import shareImage from '../services/share-image'
import Isvg from 'react-inlinesvg';
import { Helmet } from "react-helmet";
import FacebookProvider, { Share } from 'react-facebook';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'
import configFonts from '../config/fonts';
import _ from 'lodash';

const sharedImageBaseUrl = 'https://s3.amazonaws.com/photocampaign-storage/';
const siteUrl = 'https://www.limitededucation.com';

export default class extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { step: 0 };
  }

  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  onGotoStep1Click() {
    this.setState({ step: 1, selectedFont: configFonts[0] });
  }

  onGotoStep2Click() {
    console.log(this.state);
    const selectedFont = this.state.selectedFont;
    this.setState({ step: 2 });
    if(this.state.inputName.length > 0){
      generateImage(this.state.outputName, { fontFamily: selectedFont.fontFamily, childrenName: selectedFont.fullname  }, (imgUrl) => {
        const imageBase64String = imgUrl.split(',').pop();
        shareImage(imageBase64String, (err, sharedId) => {
          console.log(sharedId);
          if (err) {
            // Handle error
            alert('Failed to upload share image');
          } else {
            this.setState({ 
              step: 3,
              outputImageUrl: imgUrl,
              sharedLink: `${siteUrl}/?shareid=${sharedId}`,
              sharedImageUrl: `${sharedImageBaseUrl}${sharedId}.jpg`,
            });
          }
        });
      });
    }
    
  }

  onTextNameChage(e) {
    const val = e.target.value;
    this.setState({ inputName: val, outputName: trasformName(val) });
  }

  onFontSelected(font) {
    this.setState({ selectedFont: font });
  }

  onBackClick() {
    this.setState({ step: 0, inputName: '', outputName: '' });
  }

  // Deprecated
  onShareClick() {
    Router.push('/thankyou');
  }

  renderBackButton() {
    return (<a className="btn btn-default full-width" onClick={this.onBackClick.bind(this)} href="#">ย้อนกลับ</a>);
  }

  renderDownloadButton() {
    return (<a className="btn btn-default full-width" href={this.state.outputImageUrl} download="output.jpg">โหลด</a>);
  }

  renderShareButton() {
    // https://www.facebook.com/sharer/sharer.php?u=https%3A//limited-education.now.sh
    return (<div>
      {/* <FacebookProvider appId="649567235238332" redirectURI={`${siteUrl}/thankyou`}>
        <Share href={this.state.sharedLink} hashtag="LimitedEducation">
          <button className="btn btn-blue-2 full-width" type="button" >แชร์</button>
        </Share>
      </FacebookProvider>
      */}
      <a className="btn btn-default full-width" href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.sharedLink}&redirect_uri=${siteUrl}/thankyou`} target="_blank" onClick={this.onShareClick.bind(this)}>แชร์</a>
    </div>);
  }

  renderPreorderButton() {
    return (<a className="btn btn-yellow full-width" href="https://taejai.com/th/">สั่งซื้อเสื้อ</a>);
  }

  render () {
    const shareId = _.get(this.props, 'url.query.shareid');
    const greyhoundHeaderStyle = {
      maxWidth: '165px',
      maxHeight: '34px',
      margin: '20px auto 75px auto',
    };
    const limitedEducationHeaderStyle = {
      maxWidth: '175px',
      maxHeight: '91px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '75px',
    };

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
      </Helmet>
      {/*
        <BackgroundVideo />
      */}
      <div className="page-container">
        
        {(this.state.step === 0) && 
          <div>
            <div style={greyhoundHeaderStyle}>
              <Isvg src="/static/images/logo-greyhound-white.svg" ></Isvg>
            </div>
            <div style={limitedEducationHeaderStyle}>
              <Isvg src="/static/images/logo-limited-education-white.svg"></Isvg>
            </div>
            <div className="input-name-container">
              <input type="text" className="input-name" onChange={this.onTextNameChage.bind(this)} placeholder="โปรดใส่ชื่อของคุณในช่อง..."/><br />
            </div>
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
              fonts={configFonts}
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
            <span>LOADING...</span>
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
              ด้วยการช่วยกันแชร์ต่อให้มีคนรู้เรื่องนี้มากขึ้น หรือช่วยกันสนับสนุนเงินด้วยการซื้อเสื้อ<br />
              เงินทุกบาทจะนำไปช่วยการศึกษาของน้อง...และอาจทำให้น้องๆเขียนชื่อคุณได้ถูกต้องในอนาคต<br />
              </p>
            </div>
            <div>
              <Breakpoint maxWidth={700} widthMethod="componentWidth">
                {this.renderBackButton()}
                {this.renderDownloadButton()}
                {this.renderShareButton()}
                {this.renderPreorderButton()}
              </Breakpoint>
              <Breakpoint minWidth={700} widthMethod="componentWidth">
                <Container
                  style={{
                    maxWidth: 1170,
                  }}
                >
                <Grid columns={12} style={{ width: '100%' }}>
                  <Span columns={3}>
                    {this.renderBackButton()}
                  </Span>
                  <Span columns={3}>
                    {this.renderDownloadButton()}
                  </Span>
                  <Span columns={3}>
                    {this.renderShareButton()}
                  </Span>
                  <Span columns={3} last>
                    {this.renderPreorderButton()}
                  </Span>
                </Grid>
                </Container>
              </Breakpoint>
              
            </div>
          </div>
        }
      </div>
    </div>
  }

}
