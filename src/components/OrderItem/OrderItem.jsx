import React from "react";

export class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.action = this.action.bind(this);
  }

  action() {
    this.props.removeFromOrder(this.props.index, this.props.price);
  }

  render() {
    const { name, price, bread, isHot } = this.props;

    return (
      <li className="order-item">
        <p className="order-item__name">
          {name}
          <span className="order-item__price">&pound;{price.toFixed(2)}</span>
        </p>
        {isHot && <small className="hot">HOT</small>}
        <small>{bread !== "Standard" && bread}</small>
        <button onClick={this.action}>- Remove</button>
      </li>
    );
  }
}
