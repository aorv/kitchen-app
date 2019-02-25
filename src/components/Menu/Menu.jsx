import React from 'react';
import { MenuCategory } from '..';

export class Menu extends React.Component {
  render() {
    const { categories, breads, addToOrder } = this.props;

    return (
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
            />
          );
        })}
      </div>
    );
  }
}
