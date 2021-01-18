import React from 'react';

class Forms extends React.Component {

  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
      comment: '',
      letter: false,
      city: 'Fortaleza',
    }
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;
    
    this.setState({[name]: value});
  }

  render() {

    const cities = ['Fortaleza', 'Caucaia', 'Maracanau'];
    const { login, password, comment, letter, city } = this.state;

    return(
      <form>
        <select name='city' value={city} onChange={this.handleChange}>
          <option>{cities[0]}</option>
          <option>{cities[1]}</option>
          <option>{cities[2]}</option>
        </select>
        <label>Login
          <input type='text' name='login' onChange={this.handleChange} value={login}></input>
        </label>
        <label>Password
          <input type='password' name='password' onChange={this.handleChange} value={password}></input>
        </label>
        <textarea name='comment' onChange={this.handleChange} value={comment}></textarea>
        <label>
          <input type='checkbox' name='letter' value={letter} onChange={this.handleChange}></input>Marque aqui para receber notícias
        </label>
      </form>
    );
  }
}

export default Forms;