import React from "react";
import ReactDOM from "react-dom";
import { sandwiches, breads } from "./data";
import { Menu, Order } from "./components";
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
    console.log(this.state);
    return (
      <React.Fragment>
        <img
          className="logo"
          width="150"
          alt="Kitchen logo"
          src="http://static1.squarespace.com/static/53cfbe9fe4b0be33a439bc35/t/54044457e4b017ae41b2054d/1539272470942/?format=750w"
        />
        <div className="app">
          <Menu
            sandwiches={sandwiches}
            breads={breads}
            addToOrder={this.addToOrder}
          />
          <Order
            items={orderItems}
            total={orderTotal}
            removeFromOrder={this.removeFromOrder}
          />
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
