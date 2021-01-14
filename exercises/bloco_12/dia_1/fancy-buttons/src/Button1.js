import React from 'react';

class Button1 extends React.Component {

  constructor() {
    super();
    this.state = {
      numeroClick1: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }
  handleClick1(event) {
    this.setState((OldState, _props) => ({
      numeroClick1: OldState.numeroClick1 + 1
    }), () => {
      console.log(event.target.style.backgroundColor);
      this.handleChange1(event);
    });
  }

  handleChange1(event) {
    if(this.state.numeroClick1 % 2 === 0) {
      event.target.style.backgroundColor = '#080';
    } else {
      event.target.style.backgroundColor = '#e7e7e7';
    }
  }

  render() {
    return (
      <button onClick={this.handleClick1}>
        {this.state.numeroClick1}
      </button>
    );
  }
}

export default Button1;
