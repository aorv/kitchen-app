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
    const orderItems = this.state.orderItems;
    const orderTotal = this.state.orderTotal + price;

    orderItems.push({
      name,
      price,
      bread,
      isHot
    });

    this.setState({
      orderItems,
      orderTotal
    });
  }

  removeFromOrder(i, price) {
    const orderItems = this.state.orderItems;
    orderItems.splice(i, 1);
    const orderTotal = orderItems.length === 0 ? 0 : this.state.orderTotal - price;

    this.setState({
      orderItems,
      orderTotal
    });
  }

  render() {
    const { orderItems, orderTotal } = this.state;

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
