import React from 'react'
import DonateBar from '../components/donate-bar'
import Isvg from 'react-inlinesvg';
import { Helmet } from "react-helmet";
import preorder from '../services/preorder';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'
import _ from 'lodash';
import ReactGA from 'react-ga';


const sharedImageBaseUrl = 'https://s3.amazonaws.com/photocampaign-storage/';

const containerStyle = {
  padding: '40px 0',
  minHeight: '100vh',
};

const pageHeaderStyle = {
  fontFamily: 'limited_education',
  fontWeight: 'normal',
}

const thankyouMessageStyle = {
  fontFamily: 'limited_education',
  background: 'white',
  padding: '40px 20px',
  fontWeight: 'normal',
};

const shirtPreviewStyle = {
  width: '100%',
}

const shirtInfoStyle = {
  textAlign: 'center',
};

const validationErrorStyle = {
  color: '#ec2227',
};

const limitedEducationHeaderStyle = {
  width: '175px',
  height: '91px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '75px',
};

const preorderFormStyle = {
  textAlign: 'left',
}

const formGroupStyle = {
  marginBottom: '20px'
}

const textboxStyle = {
  background: 'transparent',
  border: '1px solid white',
  color: 'white',
  fontSize: '30px',
  lineHeight: '30px',
  width: '100%',
  fontFamily: 'DBHelvethaicaXRegular'
}

const radioStyle = {
  border: '1px solid white',
  width: '20px',
  height: '20px',
  background: 'transparent',
  padding: 0,
}

const radioContainerStyle = {
  display: 'inline-block',
  margin: '10px 20px'
}

const soldOutLabelStyle = {
  background: 'rgba(255,0,0,0.8)',
  color: 'white',
  padding: '10px 20px',
  width: '250px',
  height: '50px',
  marginLeft: '60px',
  marginTop: '-120px',
  fontSize: '30px',
  fontFamily: 'DBHelvethaicaXRegular',
  marginBottom: '100px',
  position: 'absolute',
  transform: 'rotate(-20deg)'
}

const soldoutTextStyle = {
  color: 'red',
  textDecoration: 'underline'
}

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

const enableCustomShirtOrder = false;

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputSize: '',
      inputMobile: '',
      inputEmail: '',
      inputDeliveryMethod: 'post',
      inputAddress: '',
      inputDeliveryName: '',
      preorderCompleted: false,
      validationErrors: {},
      loading: false,
    };
  }

  onFormValueChanged(e){
    this.setState({ [e.target.name]: e.target.value  })
  }

  onPreorderClick (e) {
    e.preventDefault(); // Let's stop this event.
    e.stopPropagation(); // Really this time.

    const { inputSize, inputMobile, inputEmail, inputDeliveryMethod, inputAddress, inputDeliveryName } = this.state;
    const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';
    const eventKey = _.get(this.props, 'url.query.key', '');

    // Validate
    let validationErrors = {};
    if(!inputSize) validationErrors.inputSize = 'Please specify size';
    if(!inputMobile) validationErrors.inputMobile = 'Please enter mobile phone number';
    if(!inputEmail || !this.isValidEmail(inputEmail)) validationErrors.inputEmail = 'Please enter a valid email';
    if(!inputDeliveryMethod) validationErrors.inputDeliveryMethod = 'Please specify delivery method';
    if(inputDeliveryMethod === 'post' && (!inputAddress)) validationErrors.inputAddress = 'Please specify address'; 
    if(eventMode && !inputDeliveryName) validationErrors.inputDeliveryName = 'Please specify receiver name'; 
    this.setState({ validationErrors });
    if(!_.isEmpty(validationErrors)) return;

    // Validate
    const { inputName, outputName, fontName, shareid } = this.props.url.query;

    let preorderInfo = {
      "input_name": inputName,
      "output_name": outputName,
      "font_name": fontName,
      "share_id": shareid,
      "size": inputSize,
      "email": inputEmail,
      "delivery_method": inputDeliveryMethod,
      "mobile": inputMobile,
      "address": inputAddress || '',
    };
    if(eventMode) {
      preorderInfo.delivery_name = inputDeliveryName;
      preorderInfo.mode = 'event';
      preorderInfo.key = eventKey;
    }

    this.setState({ loading: true });
    preorder(preorderInfo, (err, message) => {
      this.setState({ loading: false });
      if (err) {

      } else {
        //this.setState({ preorderCompleted: true });
        window.location.href = 'https://taejai.com/th/d/limited_education/';
      }
    });
  }

  componentDidMount() {
    ReactGA.initialize('UA-72985104-5');
    ReactGA.pageview(document.location.pathname);
  }

  isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  renderShirtPreview() {
    const shareId = _.get(this.props, 'url.query.shareid');
    const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';
    return <div>
      <img src={`${sharedImageBaseUrl}${shareId}.jpg`} style={shirtPreviewStyle} />
      {(!enableCustomShirtOrder && !eventMode) && <div style={soldOutLabelStyle}>เต็มจำนวน 100 ตัวแล้ว</div>}
    </div>;
  }

  renderShirtInfo() {
      const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';

     return <div style={shirtInfoStyle}>
      {(enableCustomShirtOrder || eventMode) &&
        <div>
          <h3>499.- บาท</h3>
          <p>รับเสื้อ #LimitedEducation ที่เป็น “ชื่อ” ของคุณ 
          Design by เด็กที่อายุเทียบเท่าชั้น ม.ต้น
          </p>
          <p><strong>เสื้อมีจำนวนจำกัดเฉพาะ 100 คนแรก!</strong></p>
          <p>
          เงินที่ได้รับการสนับสนุนจะนำไปเป็นทุนตั้งต้นใน
          กองทุนการศึกษาเพื่ออนาคตเด็กไทย โดยมีเป้าหมายเข้าถึง
          เยาวชนขาดโอกาสใน 100 โรงเรียน ทั่วประเทศที่เป็น
          โรงเรียนประถมขยายโอกาสหรือโรงเรียนมัธยมขนาดกลาง
          </p>
        </div>
      }
      {(!enableCustomShirtOrder && !eventMode) &&
        <div>
          <h2 style={{ marginBottom: 0 }}>ขอบคุณทุกท่าน </h2>
          <p style={{ textAlign: 'left', marginTop: 0 }}>
          ที่ร่วม "ดีไซน์" การศึกษาของประเทศไทย<br />
          โดยการบริจาคและสนับสนุนเสื้อ<br />
          Greyhound Limited Education แบบ "ชื่อของคุณ" <br />
          โดยได้รับการสนับสนุนผ่านทางออนไลน์ <strong style={soldoutTextStyle}>เต็มจำนวนแล้ว</strong>
          </p>

          <p>สำหรับผู้ที่ต้องการบริจาคเพิ่มเติม 
          ตั้งแต่วันที่ 6 มิถุนายน 2560 เวลา 18:00 น. ทุกการบริจาคตั้งแต่ 550 บาท 
          จะได้รับเสื้อที่ระลึกลายโลโก้ Greyhound Limited Education 
          ภายในเดือนกรกฎาคม 2560 (รวมค่าจัดส่งไปรษณีย์แล้ว)
          </p>
          <a href="/static/images/limited-tshirt-2.jpg" target="_blank"><img src="/static/images/limited-tshirt-2.jpg" style={{ width: '100%' }}/></a>
          <p>
          แล้วพบกับกิจกรรม Limited Education ที่งาน "ทำดีหวังผล" วันที่ 9-11 มิถุนายนนี้ Education Pavilion โซน Eden ชั้น 2 Central World

          </p>
        </div>
      }
      </div>;
  }

  renderPreorderForm() {
    const { validationErrors } = this.state;
    const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';

    return <div>
      {!this.state.preorderCompleted &&
        <form style={preorderFormStyle} onSubmit={this.onPreorderClick.bind(this)}>
          <div className="form-group" style={formGroupStyle}>
            <label>ไซส์เสื้อที่ต้องการ</label><br />
            <div>
              <div style={radioContainerStyle}>
                <input type="radio" name="inputSize" value="S" onChange={this.onFormValueChanged.bind(this)} style={radioStyle}/> <label>S</label>
              </div>
              <div style={radioContainerStyle}>
                <input type="radio" name="inputSize" value="M" onChange={this.onFormValueChanged.bind(this)} style={radioStyle}/> <label>M</label> 
              </div>
              <div style={radioContainerStyle}>
                <input type="radio" name="inputSize" value="L" onChange={this.onFormValueChanged.bind(this)} style={radioStyle}/> <label>L</label> 
              </div>
            </div>
            {validationErrors.inputSize && 
              <span style={validationErrorStyle}>{validationErrors.inputSize}</span>
            }
          </div>
          {eventMode && 
            <div className="form-group" style={formGroupStyle} >
              <label>ชื่อผู้รับ</label><br />
              <input type="text" style={{ ... textboxStyle }} name="inputDeliveryName" onChange={this.onFormValueChanged.bind(this)}/>
              {this.state.validationErrors.inputEmail && 
                <span style={validationErrorStyle}>{this.state.validationErrors.inputDeliveryName}</span>
              }
            </div>
          }

          <div className="form-group" style={formGroupStyle}>
            <label>Mobile</label><br />
            <input type="text" style={{ ... textboxStyle }} name="inputMobile" onChange={this.onFormValueChanged.bind(this)}/>
            {validationErrors.inputMobile && 
              <span style={validationErrorStyle}>{validationErrors.inputMobile}</span>
            }
          </div>
          <div className="form-group" style={formGroupStyle} >
            <label>Email</label><br />
            <input type="text" style={{ ... textboxStyle }} name="inputEmail" onChange={this.onFormValueChanged.bind(this)}/>
            {this.state.validationErrors.inputEmail && 
              <span style={validationErrorStyle}>{this.state.validationErrors.inputEmail}</span>
            }
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label>จัดส่ง</label><br /><br />
            {eventMode && 
              <div>
              <input type="radio" name="inputDeliveryMethod" value="atbooth" onChange={this.onFormValueChanged.bind(this)} style={radioStyle}/> 
              <label>รับเสื้อหน้างานวันที่ 10-11 มิถุนายน<br />ที่ booth Education Pavilion @ Central World Eden Zone Fl. 2
              </label><br /><br /></div>
            }
            {eventMode &&
            <div>
              <input type="radio" name="inputDeliveryMethod" value="post" onChange={this.onFormValueChanged.bind(this)} style={radioStyle}/>
              <label>ส่งทางไปรษณีย์
              </label>
            </div>
            }
            {!eventMode &&
            <div>
              <input type="radio" name="inputDeliveryMethod" value="post" onChange={this.onFormValueChanged.bind(this)} style={radioStyle} checked/>
              <label>ส่งทางไปรษณีย์
              </label>
            </div>
            }
            <br/>
            {this.state.validationErrors.inputDeliveryMethod && 
              <span style={validationErrorStyle}>{this.state.validationErrors.inputDeliveryMethod}</span>
            }
            <textarea placeholder="พิมพ์ที่อยู่" style={{  ... textboxStyle, marginLeft: '30px', width: 'calc(100% - 30px)' }} 
              rows="5" name="inputAddress" onChange={this.onFormValueChanged.bind(this)}>
            </textarea>
            {this.state.validationErrors.inputAddress && 
              <span style={validationErrorStyle}>{this.state.validationErrors.inputAddress}</span>
            }
          </div>
          {this.state.loading &&
            <div className="loader" />
          }
          {!this.state.loading &&
            <button onClick={this.onPreorderClick.bind(this)} className="btn btn-yellow" style={{ marginTop: '40px' }}>บริจาค</button>
          }
      </form>}
      {this.state.preorderCompleted && 
        <h2>Preorder Completed!</h2>
      }
    </div>
  }

  render () {
    const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';

    return <div className="page-container" style={containerStyle}>
      <div style={limitedEducationHeaderStyle}>
        <Isvg src="/static/images/logo-limited-education-white.svg"></Isvg>
      </div>
      <Breakpoint maxWidth={700} widthMethod="componentWidth">
        <Container
          style={{
            maxWidth: 960,
            padding: '0 20px',
          }}
        >
          {this.renderShirtInfo()}
          {this.renderPreorderForm()}
        </Container>
      </Breakpoint>
      <Breakpoint minWidth={700} widthMethod="componentWidth">
        <Container
          style={{
            maxWidth: 960,
          }}
        >
          <Grid columns={12} style={{ width: '100%' }}>
            <Span columns={5}>
              {this.renderShirtPreview()}
              {this.renderShirtInfo()}
            </Span>
            <Span columns={5} last>
              {this.renderPreorderForm()}
            </Span>
          </Grid>
        </Container>
      </Breakpoint>
      {eventMode &&
        <div style={eventModeLabelStyle}>EVENT MODE</div>
      }
    </div>
  }

}