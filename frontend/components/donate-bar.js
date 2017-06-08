import _ from 'lodash'
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'

export default class extends React.Component {
  render() {
    const sponsors = [
      { name: 'yuwapat', height: '58px', link: 'https://www.facebook.com/yuvabadhana/' },
      { name: 'teach-for-thailand', height: '39px', link: 'http://www.teachforthailand.org/TH/' },
      { name: 'learn-education', height: '29px', link: 'https://www.facebook.com/LearnEducationThai/photos/a.1704702656421578.1073741828.1701022726789571/2296844717207366/?type=3&theater' },
      { name: 'edwings', height: '34px', link: 'http://www.edwings.co.th' },
      { name: 'a-chieve', height: '54px', link: 'http://www.a-chieve.org/', last: true },
    ];

    const containerStyle = {
      padding: '20px 10px',
    };

    const sponsorStyle = {
      display: 'inline-block',
      verticalAlign: 'middle',
      background: 'white',
      height: '150px',
      padding: '5px;'
    };

    const sponsorInnerStyle = {
      padding: '40px 0'
    };

    const sponsorMobileStyle = {
      display: 'block',
      padding: '20px 20px',
      verticalAlign: 'middle',
      background: 'white',
      margin: '5px',
    };

    return <div style={containerStyle}>
      <Breakpoint maxWidth={700} widthMethod="componentWidth">
        {_.map(sponsors, (sponsor) => (
          <div style={sponsorMobileStyle}>
            <a href={sponsor.link}><img src={`/static/images/sponsor-${sponsor.name}.png`} style={{ width: 'auto', height: sponsor.height }} /></a>
          </div>
        ))}
      </Breakpoint>
      <Breakpoint minWidth={700} widthMethod="componentWidth">
        <Container
            style={{
              maxWidth: 1170,
            }}
          >
          <Grid columns={10}>
            {_.map(sponsors, (sponsor) => (
              <Span columns={2} last={sponsor.last} style={sponsorStyle}>
                <a href={sponsor.link}>
                  <div style={sponsorInnerStyle}>
                    <img src={`/static/images/sponsor-${sponsor.name}.png`} style={{ width: 'auto', height: sponsor.height }} />
                  </div>
                </a>
              </Span>
            ))}
          </Grid>
        </Container>
      </Breakpoint>

      
    </div>;
  }
}