import React from "react";

export class OrderItem extends React.Component {
  action() {
    this.props.removeFromOrder(this.props.index, this.props.price);
  }

  render() {
    const { name, price, bread, isHot } = this.props;
    return (
      <li className="order__item">
        <p className="order__item-name">
          {name}
          <span className="order__item-price">&pound;{price.toFixed(2)}</span>
        </p>
        {isHot && <small className="hot">HOT</small>}
        <small>{bread !== "Standard" && bread}</small>
        <button onClick={this.action.bind(this)}>- Remove</button>
      </li>
    );
  }
}
