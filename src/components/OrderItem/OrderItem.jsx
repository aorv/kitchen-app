import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
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
    const { name, price, bread, isHot, hasButton, orderOwner } = this.props;

    return (
      <li className="order-item">
        {orderOwner && <p className="order-item__owner">{orderOwner}</p>}
        <p className="order-item__name">
          {name}
          <span className="order-item__price"><Price value={price} /></span>
        </p>
        {isHot && <small className="hot">HOT</small>}
        {bread !== 'Standard' && <small>{bread}</small>}
        {hasButton && (
          <IconButton aria-label="Delete" onClick={this.action}>
            <DeleteIcon fontSize="small" color="primary" />
          </IconButton>
        )}
      </li>
    );
  }
}
