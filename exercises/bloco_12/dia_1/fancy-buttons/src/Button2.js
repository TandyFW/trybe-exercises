import React from 'react';

class Button2 extends React.Component {
  
  constructor() {
    super();
    this.state = {
      numeroClick2: 0,
    }
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleClick2(event) {
    this.setState((oldState, _props) => ({
      numeroClick2: oldState.numeroClick2 + 1
    }), () => {
      console.log(event.target.style.backgroundColor);
      this.handleChange2(event)
    });
  }

  handleChange2(event) {
    if(this.state.numeroClick2 % 2 === 0) {
      event.target.style.backgroundColor = '#080';
    } else {
      event.target.style.backgroundColor = '#e7e7e7';
    }
  }

  render() {
    return (
      <button onClick={this.handleClick2}>{this.state.numeroClick2}</button>
    );
  }
}

export default Button2;
