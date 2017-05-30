import React from 'react'
import DonateBar from '../components/donate-bar'
import Isvg from 'react-inlinesvg';
import { Helmet } from "react-helmet";
import _ from 'lodash';

const containerStyle = {
  background: '#e1e1ea',
  color: 'black',
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

export default class extends React.Component {
  render () {

    return <div style={containerStyle}>
      <h1 style={pageHeaderStyle}>ลิมิเต็ด เอ็ดดูเคชชั่น</h1>
      <h2 style={thankyouMessageStyle}>ขอบคุณที่ช่วยสร้างการเปลี่ยนแปลงให้กับการศึกษาไทย</h2>
      <div>
        มีคนที่คอยช่วยสร้างโอกาสให้กับน้องๆในด้านต่างๆ หากคุณต้องการสนับสนุนพวกเขาสามารถร่วมให้เงินสนับสนุน ลงแรง แบ่งปันเวลา ความสามารถ ได้ที่นี่
      </div>
      <DonateBar />
    </div>
  }

}