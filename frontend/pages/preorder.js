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

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputSize: '',
      inputMobile: '',
      inputEmail: '',
      inputDeliveryMethod: '',
      inputAddress: '',
      preorderCompleted: false,
      validationErrors: {}
    };
  }

  onFormValueChanged(e){
    this.setState({ [e.target.name]: e.target.value  })
  }

  onPreorderClick (e) {
    e.preventDefault(); // Let's stop this event.
    e.stopPropagation(); // Really this time.

    const { inputSize, inputMobile, inputEmail, inputDeliveryMethod, inputAddress } = this.state;

    // Validate
    let validationErrors = {};
    if(!inputSize) validationErrors.inputSize = 'Please specify size';
    if(!inputMobile) validationErrors.inputMobile = 'Please enter mobile phone number';
    if(!inputEmail || !this.isValidEmail(inputEmail)) validationErrors.inputEmail = 'Please enter a valid email';
    if(!inputDeliveryMethod) validationErrors.inputDeliveryMethod = 'Please specify delivery method';
    if(inputDeliveryMethod === 'post' && (!inputAddress)) validationErrors.inputAddress = 'Please specify address'; 

    this.setState({ validationErrors });
    if(!_.isEmpty(validationErrors)) return;

    // Validate
    const { inputName, outputName, fontName, shareid } = this.props.url.query;

    const preorderInfo = {
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
    preorder(preorderInfo, (err, message) => {
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
    return <img src={`${sharedImageBaseUrl}${shareId}.jpg`} style={shirtPreviewStyle} />
  }

  renderShirtInfo() {
     return <div style={shirtInfoStyle}>
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
     </div>;
  }

  renderPreorderForm() {
    const { validationErrors } = this.state;
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
            <input type="radio" name="inputDeliveryMethod" value="atbooth" onChange={this.onFormValueChanged.bind(this)} style={radioStyle}/> 
              <label>รับเสื้อหน้างานวันที่ 10-11 มิถุนายน<br />ที่ booth Education Pavilion @ Central World Eden Zone Fl. 2
              </label><br/><br />
            <input type="radio" name="inputDeliveryMethod" value="post" onChange={this.onFormValueChanged.bind(this)} style={radioStyle}/>
              <label>ส่งไปรษณีย์
              </label>
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
          <button onClick={this.onPreorderClick.bind(this)} className="btn btn-yellow" style={{ marginTop: '40px' }}>บริจาค</button>
      </form>}
      {this.state.preorderCompleted && 
        <h2>Preorder Completed!</h2>
      }
    </div>
  }

  render () {
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
      
    </div>
  }

}