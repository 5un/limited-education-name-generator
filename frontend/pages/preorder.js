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
      {(this.state.step === 4) && 
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
  }

}