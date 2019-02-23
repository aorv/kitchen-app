import React from "react";
import ReactDOM from "react-dom";
import { categories, breads } from "./data";
import { Header, Menu, Order, Footer } from "./components";
import firebase from './firebase.js';
import "./styles/main.scss";

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
      let items = snapshot.val();
      let newState = [];
      let orderTotal = 0;

      for (let item in items) {
        newState.push({
          id: item,
          bread: items[item].bread,
          isHot: items[item].isHot,
          name: items[item].name,
          price: items[item].price
        });
        orderTotal += items[item].price;
      }

      this.setState({
        orderItems: newState,
        orderTotal: orderTotal
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
        <Footer />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
