import React from "react";
import { OrderItem } from "../../components";

export class Order extends React.Component {
  render() {
    const { items, total, removeFromOrder } = this.props;

    return (
      <div className="order">
        <h1>Order</h1>
        <h2>Items({items.length})</h2>
        <ul className="order__items">
          {items.map((item, i) => {
            const { name, price, bread, isHot } = item;
            return (
              <OrderItem
                key={i}
                index={i}
                name={name}
                price={price}
                bread={bread}
                isHot={isHot}
                removeFromOrder={removeFromOrder}
              />
            );
          })}
        </ul>
        <p className="order__total">
          TOTAL <span>&pound;{total.toFixed(2)}</span>
        </p>
      </div>
    );
  }
}
