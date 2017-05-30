import React from 'react'
import Router from 'next/router'
import BackgroundVideo from '../components/background-video'
import SponsorBar from '../components/sponsor-bar'
import trasformName from '../services/transform-name'
import generateImage from '../services/generate-image'
import shareImage from '../services/share-image'
import Isvg from 'react-inlinesvg';
import { Helmet } from "react-helmet";
import FacebookProvider, { Share } from 'react-facebook';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'
import _ from 'lodash';

const sharedImageBaseUrl = 'https://s3.amazonaws.com/photocampaign-storage/';
const siteUrl = 'https://limited-education.now.sh';

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

  onGenerateClick() {
    this.setState({ step: 1 });
    if(this.state.inputName.length > 0){
      generateImage(this.state.outputName, (imgUrl) => {
        const imageBase64String = imgUrl.split(',').pop();
        shareImage(imageBase64String, (err, sharedId) => {
          console.log(sharedId);
          if (err) {
            // Handle error
            alert('Failed to upload share image');
          } else {
            this.setState({ 
              step: 2,
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

  onBackClick() {
    this.setState({ step: 0, inputName: '', outputName: '' });
  }

  // Deprecated
  onShareClick() {
    Router.push('/thankyou');
  }

  renderBackButton() {
    return (<button className="btn btn-default full-width" onClick={this.onBackClick.bind(this)}>ย้อนกลับ</button>);
  }

  renderDownloadButton() {
    return (<a className="btn btn-blue-1 full-width" href={this.state.outputImageUrl} download="output.jpg">โหลด</a>);
  }

  renderShareButton() {
    return (<FacebookProvider appId="649567235238332" redirectURI={`${siteUrl}/thankyou`}>
      <Share href={this.state.sharedLink} hashtag="LimitedEducation">
        <button className="btn btn-blue-2 full-width" type="button" onClick={this.onShareClick.bind(this)}>แชร์</button>
      </Share>
    </FacebookProvider>);
  }

  renderPreorderButton() {
    return (<a className="btn btn-blue-3 full-width" href="https://taejai.com/th/">สั่งซื้อเสื้อ</a>);
  }



  render () {
    const shareId = _.get(this.props, 'url.query.shareid');

    return <div>
      <Helmet>
        <title>Limited Education</title>
        <meta name="description" content="คุณก็สามารถร่วมเป็นอีกหนึ่งพลังในการสร้างโอกาสทางการศึกษาให้กับน้องๆได้ง่ายๆเพียงแค่คลิก" />
        {shareId ?
          <meta property="og:url" content={`siteUrl?shareid=${shareId}`} /> :
          <meta property="og:url" content={siteUrl} />
        }
        <meta property="og:type" content="website" />
        <meta property="og:title" content="คุณคิดว่าเด็กคนนั้นจะเขียนชื่อคุณออกมาเป็นอย่างไร?" />
        <meta property="og:description" content="คุณก็สามารถร่วมเป็นอีกหนึ่งพลังในการสร้างโอกาสทางการศึกษาให้กับน้องๆได้ง่ายๆเพียงแค่คลิก" />
        {shareId ?
          <meta property="og:image" content={`${sharedImageBaseUrl}${shareId}.jpg`} /> :
          <meta property="og:image" content="https://s3.amazonaws.com/photocampaign-storage/limited_website_share.jpg" />
        }
      </Helmet>
      <BackgroundVideo />
      <div className="page-container">
        <h1 className="page-header">ลิมิเต็ด เอ็ดดูเคชั่น</h1>
        <div className="sub-header-svg">
          <Isvg src="/static/images/limited-education-text-eng.svg" style={{ height: '40px' }}></Isvg>
        </div>
        {(this.state.step === 0) && 
          <div>
            <div className="input-name-container">
              <input type="text" onChange={this.onTextNameChage.bind(this)} placeholder="โปรดใส่ชื่อของคุณในช่อง..."/><br />
            </div>
            <Breakpoint maxWidth={700} widthMethod="componentWidth">
              <button className="btn btn-blue-2 full-width" onClick={this.onGenerateClick.bind(this)}>แสดงผล</button>
            </Breakpoint>
            <Breakpoint minWidth={700} widthMethod="componentWidth">
              <button className="btn btn-blue-2" onClick={this.onGenerateClick.bind(this)}>แสดงผล</button>
            </Breakpoint>
            <div>
              <p>
              คุณรู้รึเปล่าว่า...มีเด็กไทยมากกว่า<br/>
              140,000 คนที่อ่านหนังสือไม่ออก<br/>
              และ 270,000 คนที่เขียนหนังสือไม่ได้<br/>
              คุณคิดว่าเด็กคนนั้นจะเขียนชื่อคุณออกมาเป็นอย่างไร?
              </p>
            </div>
            <footer className="footer">
              <span>#LimitedEducation</span>
            </footer>
          </div>
        }
        {(this.state.step === 1) && 
          <div>
            <span>LOADING...</span>
          </div>
        }
        {(this.state.step === 2) && 
          <div>
            <img src={this.state.outputImageUrl} className="preview-generated-image"/><br />
            <div>
              <p>นี่คือลายมือจริงของเด็กนักเรียน ในโรงเรียนแห่งหนึ่งที่ห่างจากกรุงเทพไปไม่กี่กิโล</p>
              <p>คุณสามารถร่วมเป็นอีกหนึ่งพลังในการสร้างโอกาสทางการศึกษาให้กับน้องๆได้ง่ายๆเพียงแค่</p>
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
                <Grid columns={12}>
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
            <footer className="footer">
              <SponsorBar />
            </footer>
          </div>
        }
        {(this.state.step === 3) && 
          <form>
            <h2>Preorder</h2>
            <div className="form-group">
              <label>ชื่อของคุณ</label><br />
              <input type="text" />
            </div>
            <div className="form-group">
              <label>เบอร์โทรศัพท์</label><br />
              <input type="text" />
            </div>
            <div className="form-group">
              <label>อีเมล</label><br />
              <input type="text" />
            </div>
            <div className="form-group">
              <label>ไซส์เสื้อที่ต้องการ</label><br />
              <input type="radio"/> <label>S (รอบอก 0 นิ้ว ความยาว 0 นิ้ว)</label><br/>
              <input type="radio"/> <label>M (รอบอก 0 นิ้ว ความยาว 0 นิ้ว)</label><br/>
              <input type="radio"/> <label>L (รอบอก 0 นิ้ว ความยาว 0 นิ้ว)</label><br/>
              <input type="radio"/> <label>XL (รอบอก 0 นิ้ว ความยาว 0 นิ้ว)</label><br/>
              <input type="radio"/> <label>XXL (รอบอก 0 นิ้ว ความยาว 0 นิ้ว)</label><br/>
              <input type="radio"/> <label>XXXL (รอบอก 0 นิ้ว ความยาว 0 นิ้ว)</label><br/>
            </div>
            <button onClick={this.onBackClick.bind(this)}>Back</button>
            <button onClick={this.onBackClick.bind(this)}>Submit</button>
          </form>
        }
      </div>
    </div>
  }

}