import React from 'react'
import BackgroundVideo from '../components/background-video'
import trasformName from '../services/transform-name'
import generateImage from '../services/generate-image'
import shareImage from '../services/share-image'
import Isvg from 'react-inlinesvg';
import { Helmet } from "react-helmet";
import _ from 'lodash';

export default class extends React.Component {
  render () {
    return <div>
      <h1>ลิมิเต็ด เอ็ดดูเคชชั่น</h1>
      <div>ขอบคุณที่ช่วยสร้างการเปลี่ยนแปลงให้กับการศึกษาไทย</div>
      <div>
        มีคนที่คอยช่วยสร้างโอกาสให้กับน้องๆในด้านต่างๆ หากคุณต้องการสนับสนุนพวกเขาสามารถร่วมให้เงินสนับสนุน ลงแรง แบ่งปันเวลา ความสามารถ ได้ที่นี่
      </div>
    </div>
  }

}