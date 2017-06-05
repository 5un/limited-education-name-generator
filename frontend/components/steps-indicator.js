export default class StepsIndicator extends React.Component {

  render() {
    const stepDotStyle = {
      display: 'inline-block',
      width: '14px',
      height: '14px',
      borderRadius: '7px',
      backgroundColor: 'white'
    };

    const stepDotHollowStyle = {
      display: 'inline-block',
      width: '14px',
      height: '14px',
      borderRadius: '7px',
      backgroundColor: 'black',
      border: '1px solid white',
    };

    const stepEdgeStyle = {
      display: 'inline-block',
      height: '1px',
      marginLeft: '-7px',
      marginRight: '-7px',
      verticalAlign: 'middle',
      borderTop: '1px solid white',
      width: '40%',
      maxWidth: '200px',
    };

    return <div>
      <div style={stepDotStyle}></div>
      <div style={stepEdgeStyle}></div>
      <div style={stepDotStyle}></div>
      <div style={stepEdgeStyle}></div>
      <div style={stepDotHollowStyle}></div>
    </div>
  }

}
