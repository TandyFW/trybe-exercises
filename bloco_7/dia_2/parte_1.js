const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/*
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
*/

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson} , entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

/*
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.

*/
order.name = 'Luiz Silva';
order.payment = 50;
order.order.pizza.margherita.amount = 0;
order.order.pizza.margherita.price = 0;
order.order.pizza.pepperoni.amount = 0;
order.order.pizza.pepperoni.price = 0;
order.order.pizza.muzzarella = {
  amount: 1,
  price: 15
};
order.order.pizza.calabresa = {
  amount: 1,
  price: 20
};

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[2]}, ${Object.keys(order.order.pizza)[3]} e ${order.order.drinks.coke.type} é R$ ${order.payment},00.`);
}

orderModifier(order);