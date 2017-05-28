import React from 'react'
import BackgroundVideo from '../components/background-video'
import trasformName from '../services/transform-name'
import generateTShirt from '../services/generate-tshirt'
import shareImage from '../services/share-image'
import Isvg from 'react-inlinesvg';

const sharedImageBaseUrl = 'https://s3.amazonaws.com/photocampaign-storage/';

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
    generateTShirt(this.state.outputName, (imgUrl) => {
      this.setState({ step: 1, outputImageUrl: imgUrl });

    });
  }

  onTextNameChage(e) {
    const val = e.target.value;
    this.setState({ inputName: val, outputName: trasformName(val) });
  }

  onBackClick() {
    this.setState({ step: 0, inputName: '', outputName: '' });
  }

  onBuyClick() {
    //TODO Open Google Forms Page
    this.setState({ step: 2 });
  }

  onShareClick() {
    // TODO Upload image to the service and get the id response
    // Set the share link
    // Open FB Dialog
    const imageBase64String = this.state.outputImageUrl.split(',').pop();
    shareImage(imageBase64String, (err, sharedId) => {
      console.log(sharedId);
      if (err) {
        // Handle error
      } else {
        this.setState({ sharedLink: `/?share_id${sharedId}` });
      }
      
    });
  }

  render () {
    //console.log(this.props.url.query);
    // TODO fetch the share url here
    // TODO put customized head
    return <div>
      <BackgroundVideo />
      <div className="page-container">
        <h1 className="page-header">ลิมิเต็ด เอ็ดดูเคชั่น</h1>
        <div className="sub-header-svg">
          <Isvg src="/static/images/limited-education-text-eng.svg" style={{ height: '40px' }}></Isvg>
        </div>
        {(this.state.step === 0) && 
          <div>
            <input type="text" onChange={this.onTextNameChage.bind(this)} placeholder="โปรดใส่ชื่อของคุณในช่อง..."/><br />
            <button className="btn-blue" onClick={this.onGenerateClick.bind(this)}>แสดงผล</button>
          </div>
        }
        {(this.state.step === 1) && 
          <div>
            <img src={this.state.outputImageUrl} className="preview-generated-image"/><br />
            <div>
              <p>นี่คือลายมือจริงของเด็กนักเรียน ในโรงเรียนแห่งหนึ่งที่ห่างจากกรุงเทพไปไม่กี่กิโล</p>
              <p>คุณสามารถร่วมเป็นอีกหนึ่งพลังในการสร้างโอกาสทางการศึกษาให้กับน้องๆได้ง่ายๆเพียงแค่</p>
            </div>
            <div>
              <button onClick={this.onBackClick.bind(this)}>ย้อนกลับ</button>
              <a className="btn" href={this.state.outputImageUrl} download="output.jpg">โหลด</a>
              <button onClick={this.onShareClick.bind(this)}>แชร์</button>
              <button onClick={this.onBuyClick.bind(this)}>สื่อซื้อเสื้อ</button>
            </div>
          </div>
        }
        {(this.state.step === 2) && 
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
        <div className="footer">
          <span>#LimitedEducation</span>
        </div>
      </div>
    </div>
  }

}