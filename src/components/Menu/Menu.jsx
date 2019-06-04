import React from 'react';
import { MenuCategory } from '..';

export const Menu = ({
  categories,
  breads,
  addToOrder,
  ownerId
}) => (
  <div className="menu">
    <h1>Menu</h1>
    {categories.map((category, i) => {
      const { title, items } = category;

      return (
        <MenuCategory
          key={i}
          title={title}
          items={items}
          breads={breads}
          addToOrder={addToOrder}
          ownerId={ownerId}
        />
      );
    })}
  </div>
);
