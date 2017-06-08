import React from 'react'
import DonateBar from '../components/donate-bar'
import Isvg from 'react-inlinesvg';
import { Helmet } from "react-helmet";
import _ from 'lodash';
import { Container } from 'react-responsive-grid'
import ReactGA from 'react-ga';

const containerStyle = {
  background: '#e1e1ea',
  color: 'black',
  padding: '40px 0',
  minHeight: '100vh',
};

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
  marginBottom: '30px',
};

const pageHeaderStyle = {
  fontFamily: 'limited_education',
  fontWeight: 'normal',
}

const thankyouMessageContainerStyle = {
  fontFamily: 'limited_education',
  background: 'rgba(255,255,255,0.1)',
  padding: '5px',
  borderRadius: '10px',
};

const thankyouMessageStyle = {
  fontFamily: 'limited_education',
  border:'1px solid white',
  padding: '10px 20px',
  borderRadius: '4px',
  fontWeight: 'normal',
  color: '#6d6e71',
};

const donateBtnStyle = {
  margin: '20px 0'
};

export default class extends React.Component {
  
  componentDidMount() {
    ReactGA.initialize('UA-72985104-5');
    ReactGA.pageview(document.location.pathname);
  }

  render () {
    const eventMode = _.get(this.props, 'url.query.mode', '') === 'event';
    return <div style={containerStyle}>
      <div style={greyhoundHeaderStyle}>
        <Isvg src="/static/images/logo-greyhound-black.svg" ></Isvg>
      </div>
      <div style={limitedEducationHeaderStyle}>
        <Isvg src="/static/images/logo-limited-education-black.svg"></Isvg>
      </div>
      <Container
        style={{
          maxWidth: 960,
        }}
      >
        <div style={thankyouMessageContainerStyle}>
          <h2 style={thankyouMessageStyle}>ขอบคุณที่ช่วยสร้างการเปลี่ยนแปลงให้กับการศึกษาไทย</h2>
        </div>
        {eventMode && 
          <a className="btn btn-yellow" style={donateBtnStyle} href="/?mode=event&key=gIepxG26bkidrmqBlDgEfviqCiZ1ALJ3">กลับไปทำใหม่</a> 
        }
        <div>
          หากคุณต้องการสนับสนุนพวกเขามากกว่านี้ มีคนที่คอยช่วยสร้างโอกาสทางการศึกษาให้กับน้องๆในด้านต่างๆ
  ร่วมให้เงินสนับสนุน ลงแรง แบ่งปันเวลา ความสามารถ ได้ที่นี่      
        </div>
        {!eventMode && 
          <a className="btn btn-yellow" style={donateBtnStyle} href="https://taejai.com/th/d/limited_education/">บริจาค</a> 
        }
        
      </Container>
      <DonateBar />
    </div>
  }

}