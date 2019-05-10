import React from 'react';
import { OrderItem, Price } from '..';

export const Order = ({
  items,
  total,
  removeFromOrder
}) => (
  <div className="order">
    <h1>Order</h1>
    <h2>Items({items.length})</h2>
    <ul className="order__items">
      {items.map((item) => {
        const { id, name, price, bread, isHot, orderOwner } = item;

        return (
          <OrderItem
            key={id}
            id={id}
            name={name}
            price={price}
            bread={bread}
            isHot={isHot}
            removeFromOrder={removeFromOrder}
            orderOwner={orderOwner}
            hasButton
          />
        );
      })}
    </ul>
    <p className="order__total">
      TOTAL <span><Price value={total} /></span>
    </p>
  </div>
);
