export default class extends React.Component {
  render() {
    const containerStyle = {
      position: 'fixed',
      left: 0,
      top: 0,
    }

    const videoStyle = {
      position: 'fixed',
      top:0,
      margin: 'auto',
      minWidth: '100vw',
      minHeight: '100vh',

    }

    const overlayStyle = {
      backgroundColor: 'rgba(0,0,0,0.7)',
      width: '100%',
      height: '150%',
      position: 'fixed',
      left: 0,
      top: 0,
    }

    return <div style={containerStyle}>
      <video autoPlay style={videoStyle} loop>
        <source src="/static/videos/video-1496047826.mp4" type="video/mp4" />
      </video>
      <div style={overlayStyle}></div>
    </div>;
  }
}