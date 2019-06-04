import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookies';
import { categories, breads } from './data';
import { Header, Menu, Order, Footer } from './components';
import firebase from './firebase';
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: [],
      orderTotal: 0.0,
      ownerId: ''
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
  }

  componentDidMount() {
    if (cookie.load('ownerId') === undefined) {
      const randomInt = Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);

      cookie.save('ownerId', randomInt, { path: '/' });
      this.setState({ ownerId: randomInt });
    }

    const orderRef = firebase.database().ref('order');
    orderRef.on('value', (snapshot) => {
      const items = snapshot.exists() ? snapshot.val() : {};
      const orderItems = [];
      let orderTotal = 0;

      Object.keys(items).forEach((item) => {
        const { name, price, bread, isHot, orderOwner, ownerId } = items[item];
        orderItems.push({
          id: item,
          name,
          price,
          bread,
          isHot,
          orderOwner,
          ownerId
        });
        orderTotal += price;
      });

      this.setState({
        orderItems,
        orderTotal
      });
    });
  }

  addToOrder(name, price, bread, isHot, orderOwner, ownerId) {
    firebase.database().ref('order').push({
      name,
      price,
      bread,
      isHot,
      orderOwner,
      ownerId
    });
  }

  removeFromOrder(id) {
    firebase.database().ref(`order/${id}`).remove();
  }

  clearOrder() {
    firebase.database().ref('order').remove();
  }

  render() {
    const { orderItems, orderTotal, ownerId } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="app">
          <Menu
            categories={categories}
            breads={breads}
            addToOrder={this.addToOrder}
            ownerId={ownerId}
          />
          <Order
            items={orderItems}
            total={orderTotal}
            removeFromOrder={this.removeFromOrder}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
