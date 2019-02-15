import React from "react";
import ReactDOM from "react-dom";
import { categories, breads } from "./data";
import { Header, Menu, Order, Footer } from "./components";
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

  addToOrder(name, price, bread, isHot) {
    this.setState(prevState => ({
      orderItems: [...prevState.orderItems, { name, price, bread, isHot }],
      orderTotal: prevState.orderTotal + price
    }));
  }

  removeFromOrder(i) {
    this.setState(prevState => ({
      orderItems: prevState.orderItems.filter((_, idx) => idx !== i)
    }));
    this.setState(prevState => {
      let orderTotal = 0;
      prevState.orderItems.forEach(order => {
        orderTotal += order.price;
      });
      return {
        orderTotal
      }
    });
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
