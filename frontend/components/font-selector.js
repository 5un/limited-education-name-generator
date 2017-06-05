import { Container, Breakpoint, Grid, Span } from 'react-responsive-grid';
import Isvg from 'react-inlinesvg';

const fontSelectorBgStyle = {
  
};

const fontSelectorHeaderStyle = {
  fontSize: '24px',
};  

const fontSelectorTextStyle = {
  margin: '-240px auto 150px auto',
  textAlign: 'center',
  color: 'black',
  fontSize: '72px'
};

const fontSelectorCellStyle = {
  display: 'inline-block',
  width: '33%',
  color: 'black',
  padding: '20px 10px',

};

const fontSelectorMobileCellStyle = {
  display: 'inline-block',
  width: ' 90px',
  color: 'black',
  margin: '5px',

};

const fontStoryStyle = {
  marginTop: '20px',
  fontSize: '24px',
  textAlign: 'justify'
};

const fontStoryNameStyle = {
  fontSize: '20px',
  fontFamily: 'DBHelvethaicaXRegular'
}

const fontSelectorItemStyle = {
  // backgroundImage: 'url(\'/static/images/font-selector.png\')',
  // backgroundPosition: 'center',
  // backgroundSize: '100% auto',
  // backgroundRepeact: 'no-repeat'
  marginTop: '-120px',
  marginBottom: '30px',
  fontSize: '36px',
}

const fontSelectorItemMobileStyle = {
  marginTop: '-70px',
  marginBottom: '30px',
  fontSize: '24px',
}

export default class FontSelector extends React.Component {

   constructor(props) {
     super(props);
     this.state = {

     };
   }

  onFontClick(font) {
    console.log(font);
    if (this.props.onFontSelected) {
      this.props.onFontSelected(font);
    }  
  }

  renderSelectedFont() {
    const { selectedFont } = this.props;
    return <div>
      <div style={fontSelectorBgStyle}>
        <img src="/static/images/font-selector-no-border-large.png" ></img>
      </div>
      <div style={{ ... fontSelectorTextStyle, fontFamily: selectedFont.fontFamily }}>
      {selectedFont &&
        <span>{selectedFont.name}</span>
      }
      </div>
      <div style={fontStoryStyle}>
      {selectedFont &&
        <div>
          <div>{selectedFont.story}</div>
          <span style={fontStoryNameStyle}>{selectedFont.fullname}</span>
        </div>
      }
      </div>
    </div>
  }

  renderFontList() {
    const { fonts } = this.props;
    let indexedFonts = fonts;
    _.forEach(indexedFonts, (f, i) => {
      f.index = i;
      f.isSelected = this.props.selectedFont && (this.props.selectedFont.name === f.name);
    });
    return <div>
      {_.map(fonts, (f) => (
        <div key={f.name} style={fontSelectorCellStyle} onClick={() => (this.onFontClick(f))}>
          {f.isSelected &&
            <img src="/static/images/font-selector.png" width="100%" height="auto"/>
          }
          {!f.isSelected &&
            <img src="/static/images/font-selector-no-border.png" width="100%" height="auto"/>
          }
          <div style={{ ... fontSelectorItemStyle, fontFamily: f.fontFamily }}>{f.name}</div>
        </div>
      ))}
    </div>;     
  }

  renderMobileFontList() {
    const { fonts } = this.props;
    let indexedFonts = fonts;
    _.forEach(indexedFonts, (f, i) => {
      f.index = i;
      f.isSelected = this.props.selectedFont && (this.props.selectedFont.name === f.name);
    });
    return <div>
      {_.map(fonts, (f) => (
        <div key={f.name} style={fontSelectorMobileCellStyle} onClick={() => (this.onFontClick(f))}>
          {f.isSelected &&
            <img src="/static/images/font-selector.png" width="100%" height="auto"/>
          }
          {!f.isSelected &&
            <img src="/static/images/font-selector-no-border.png" width="100%" height="auto" />
          }
          <div style={{ ... fontSelectorItemMobileStyle, fontFamily: f.fontFamily }}>{f.name}</div>
        </div>
      ))}
    </div>;     
  }

  render() {
    const { selectedFont } = this.props;

  	return (
  		<div>
  			<Breakpoint maxWidth={700} widthMethod="componentWidth">
          <div style={{ padding: '0 20px' }}>
          <h2 style={fontSelectorHeaderStyle}>เลือกฟอนต์ลายมือน้อง</h2>
  				{this.renderMobileFontList()}
          </div>
          <br />
          <div style={fontStoryStyle}>
            {selectedFont &&
              <div>
                <div>{selectedFont.story}</div>
                <span style={fontStoryNameStyle}>{selectedFont.fullname}</span>
              </div>
            }
          </div>
  			</Breakpoint>
  			<Breakpoint minWidth={700} widthMethod="componentWidth">
  				<Container
            style={{
              maxWidth: 960,
            }}
          >
            <Grid columns={12}>
    					<Span columns={4}>
    						{this.renderSelectedFont()}
    					</Span>
    					<Span columns={6} last>
                <h2 style={fontSelectorHeaderStyle}>เลือกฟอนต์ลายมือน้อง</h2>
    						{this.renderFontList()}
    					</Span>
    				</Grid>
          </Container>
  			</Breakpoint>
  		</div>
    );       
   }

}
