import _ from 'lodash'

export default class extends React.Component {
  render() {
    const sponsors = [
      { name: 'yuwapat', height: '58px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'teach-for-thailand', height: '39px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'learn-education', height: '29px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'edwings', height: '34px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'a-chieve', height: '54px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'greyhound', height: '26px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'scb', height: '54px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'siam-commercial', height: '59px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'chujai', height: '73px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'glow', height: '44px', link: 'http://www.teachforthailand.org/TH/' },
    ];

    const containerStyle = {
      background: 'white',
      padding: '20px 10px',
    };

    const sponsorStyle = {
      display: 'inline-block',
      padding: '0 20px',
      verticalAlign: 'middle',
    };

    return <div style={containerStyle}>
      {_.map(sponsors, (sponsor) => (
        <div style={sponsorStyle}>
          <a href={sponsor.link}><img src={`/static/images/sponsor-${sponsor.name}.png`} style={{ width: 'auto', height: sponsor.height }} /></a>
        </div>
      ))}
    </div>;
  }
}