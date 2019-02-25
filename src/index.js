import React from 'react';
import ReactDOM from 'react-dom';
import { categories, breads } from './data';
import { Header, Menu, Order, Footer } from './components';
import firebase from './firebase';
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItems: [],
      orderTotal: 0.0
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
  }

  componentDidMount() {
    const orderRef = firebase.database().ref('order');
    orderRef.on('value', (snapshot) => {
      const items = snapshot.exists() ? snapshot.val() : {};
      const orderItems = [];
      let orderTotal = 0;

      Object.keys(items).forEach((key) => {
        orderItems.push({
          id: key,
          bread: items[key].bread,
          isHot: items[key].isHot,
          name: items[key].name,
          price: items[key].price
        });
        orderTotal += items[key].price;
      });

      this.setState({
        orderItems,
        orderTotal
      });
    });
  }

  addToOrder(name, price, bread, isHot) {
    const orderRef = firebase.database().ref('order');
    const newItem = { name, price, bread, isHot };
    orderRef.push(newItem);
  }

  removeFromOrder(id) {
    const itemRef = firebase.database().ref(`/order/${id}`);
    itemRef.remove();
  }

  refresh() {
    const orderRef = firebase.database().ref('/order');
    orderRef.remove();
  }

  render() {
    const { orderItems, orderTotal } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="app">
          <Menu
            categories={categories}
            breads={breads}
            addToOrder={this.addToOrder}
          />
          <Order
            items={orderItems}
            total={orderTotal}
            removeFromOrder={this.removeFromOrder}
          />
        </div>
        <button type="button" onClick={this.refresh}>start over</button>
        <Footer />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
