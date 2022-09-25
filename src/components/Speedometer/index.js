import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  speedIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  speedDecrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="heading1">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="button1"
            type="button"
            onClick={this.speedIncrement}
          >
            Accelerate
          </button>
          <button
            className="button2"
            type="button"
            onClick={this.speedDecrease}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
