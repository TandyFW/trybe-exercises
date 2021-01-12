import React from 'react';
import Order from './Order';

class Table extends React.Component {
  render() {
    const products = [{
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }];
    return (
      products.map(element => (<div>
        <Order user={element.user} product={element.product} price={element.price}/>
      </div>)
      )
    )
  }
}

export default Table;