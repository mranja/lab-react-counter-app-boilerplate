import React, { Component } from 'react'

class Comp extends Component {


constructor() {
    super()
    this.state = { count: 0 };
}



  render() {

    let add = () => {
        this.setState({ count: this.state.count + 1 });
    };

    let subtract = () => {
    this.setState(prev => {
        return {count : prev.count -1}
    });
    };

    let reset = () => {
    this.setState({ count: 0 });
    };
    return (
      <div>
        <h1>Counter App</h1>
        <p>{this.state.count}</p>
        <div id='btns'>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Comp