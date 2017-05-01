import * as React from 'react'
import YT from 'react-youtube'

class Background extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      width: window.innerWidth,
      height: window.innerHeight,
      resizer: null
    }
    this.onReady = this.onReady.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount () {
    console.log('mounted background ' + this.props.id)
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    console.log('unmounting background ' + this.props.id)
    window.removeEventListener('resize', this.onResize)
  }

  onResize (e) {
    if (this.state.resizer) window.clearTimeout(this.state.resizer)
    this.setState({
      resizer: window.setTimeout(() => {
        this.setState({
          resizer: null,
          width: window.innerWidth,
          height: window.innerHeight
        })
      }, 500)
    })
  }

  onReady (e) {
    console.log('background ' + this.props.id + ' ready')
    this.props.events.emitEvent('youtube-ready')
    this.setState({ loaded: true })
    window.setTimeout(() => { e.target.playVideo() }, 100)
  }

  render () {
    const { height, width } = this.state
    const playerVars = {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    }
    const opts = { height, width }
    return (
      <div
        style={{
          'pointer-events': 'none',
          // TODO: Block out top and bottom with black bars?
        }}>
        <YT
          videoId={this.props.id}
          opts={opts}
          onReady={this.onReady} />
        {/* <div>Loading</div> */}
      </div>
    )
  }
}

export default Background
