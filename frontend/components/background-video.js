export default class extends React.Component {
  render() {
    const containerStyle = {
      position: 'fixed',
      left: 0,
      top: 0,
    }

    const videoStyle = {
      position: 'fixed',
      left:0,
      top:0,
      width: '100%',
      height: 'auto',
    }

    const overlayStyle = {
      backgroundColor: 'rgba(0,0,0,0.8)',
      width: '100%',
      height: '100%',
      position: 'fixed',
      left: 0,
      top: 0,
    }

    return <div style={containerStyle}>
      <video width="100%" height="auto" autoPlay style={videoStyle} loop>
        <source src="/static/videos/mother.mp4" type="video/mp4" />
      </video>
      <div style={overlayStyle}></div>
    </div>;
  }
}