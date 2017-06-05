import React from 'react'
import DonateBar from '../components/donate-bar'
import Isvg from 'react-inlinesvg';
import { Helmet } from "react-helmet";
import _ from 'lodash';
import { Container } from 'react-responsive-grid'


const containerStyle = {
  background: '#e1e1ea',
  color: 'black',
  padding: '40px 0',
  minHeight: '100vh',
};

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
  render () {

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
        <div>
          หากคุณต้องการสนับสนุนพวกเขามากกว่านี้ มีคนที่คอยช่วยสร้างโอกาสทางการศึกษาให้กับน้องๆในด้านต่างๆ
  ร่วมให้เงินสนับสนุน ลงแรง แบ่งปันเวลา ความสามารถ ได้ที่นี่      
        </div>
        <a className="btn btn-yellow" style={donateBtnStyle}>DONATE</a> 
      </Container>
      <DonateBar />
    </div>
  }

}