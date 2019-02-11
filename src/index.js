import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "./components/Menu";
import { OrderSummary } from "./components/Order";
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
    const orderTotal = this.state.orderTotal;

    orderItems.push({
      name: name,
      price: price,
      bread: bread,
      isHot: isHot
    });

    this.setState({
      orderItems: orderItems,
      orderTotal: orderTotal + price
    });
  }

  removeFromOrder(i, price) {
    const orderItems = this.state.orderItems;
    const orderTotal = this.state.orderTotal;

    orderItems.splice(i, 1);

    this.setState({
      orderItems: orderItems,
      orderTotal: orderItems.length === 0 ? 0 : orderTotal - price
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
          src="http://static1.squarespace.com/static/53cfbe9fe4b0be33a439bc35/t/54044457e4b017ae41b2054d/1539272470942/?format=750w"
        />
        <div className="app">
          <Menu addToOrder={this.addToOrder} />
          <OrderSummary
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
