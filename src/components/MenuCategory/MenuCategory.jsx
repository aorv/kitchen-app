import React from 'react';
import { MenuItem } from '..';

export const MenuCategory = ({
  title,
  items,
  breads,
  addToOrder,
  ownerId
}) => (
  <React.Fragment>
    <h2>{title}</h2>
    <ul className="menu__category">
      {items.map((sandwich, i) => {
        const { name, price, canBeHeated } = sandwich;

        return (
          <MenuItem
            key={i}
            name={name}
            price={price}
            canBeHeated={canBeHeated}
            breads={breads}
            addToOrder={addToOrder}
            ownerId={ownerId}
          />
        );
      })}
    </ul>
  </React.Fragment>
);
