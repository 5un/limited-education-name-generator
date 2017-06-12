import React from 'react'
import Router from 'next/router'
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

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ReactGA.initialize('UA-72985104-5');
    ReactGA.pageview(document.location.pathname);
  }

  render () {
    return <div className="page-container" style={containerStyle}>
      <div style={limitedEducationHeaderStyle}>
        <Isvg src="/static/images/logo-limited-education-white.svg"></Isvg>
      </div>
      <br /><br />
      <h1>Confirmed</h1>
      <p>ขอบคุณค่ะ ทางเราได้รับข้อมูลการสั่งเสื้อของคุณแล้ว</p>
      <a href="/">กลับหน้าแรก</a>
    </div>
  }

}