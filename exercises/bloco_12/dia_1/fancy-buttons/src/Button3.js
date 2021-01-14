import React from 'react';


class Button3 extends React.Component {
  
  constructor() {
    super();
    this.state = {
      numeroClick3: 0,
    }
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }
  
  handleClick3 (event) {
    this.setState((oldState, _props) => ({
      numeroClick3: oldState.numeroClick3 + 1
    }), () => {
      console.log(event.target.style.backgroundColor);
      this.handleChange3(event);
    });
  }

  handleChange3(event) {
    if(this.state.numeroClick3 % 2 === 0) {
      event.target.style.backgroundColor = '#080';
    } else {
      event.target.style.backgroundColor = '#e7e7e7';
    }
  }

  render() {
    return (
      <button onClick={this.handleClick3}>{this.state.numeroClick3}</button>
    );
  }
}

export default Button3;
