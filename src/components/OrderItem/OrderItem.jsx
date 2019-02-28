import React from 'react';
import { Price } from '..';

export class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.action = this.action.bind(this);
  }

  action() {
    const { id, removeFromOrder } = this.props;
    removeFromOrder(id);
  }

  render() {
    const { name, price, bread, isHot } = this.props;

    return (
      <li className="order-item">
        <p className="order-item__name">
          {name}
          <span className="order-item__price"><Price value={price} /></span>
        </p>
        {isHot && <small className="hot">HOT</small>}
        {bread !== 'Standard' && <small>{bread}</small>}
        <button type="button" onClick={this.action}>- Remove</button>
      </li>
    );
  }
}
