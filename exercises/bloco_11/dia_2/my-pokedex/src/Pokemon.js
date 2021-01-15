import React from 'react';
import pokemons from './data';

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <p>{pokemons.name}</p>
      </div>
    );
  }
}

export default Pokemon;
