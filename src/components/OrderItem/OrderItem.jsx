import React from 'react';
import cookie from 'react-cookies';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Price } from '..';

export const OrderItem = ({
  id,
  removeFromOrder,
  name,
  price,
  bread,
  isHot,
  hasButton,
  orderOwner,
  ownerId
}) => {
  const handleClick = () => {
    removeFromOrder(id);
  };

  const isOrderOwner = cookie.load('ownerId') === ownerId || cookie.load('ownerId') === process.env.REACT_APP_SKELETON_KEY;

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
      <IconButton aria-label="Delete" onClick={handleClick} disabled={!isOrderOwner}>
        <DeleteIcon fontSize="small" color={isOrderOwner ? 'primary' : 'disabled'} />
      </IconButton>
      )}
    </li>
  );
};
