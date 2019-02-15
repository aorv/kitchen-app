import React from "react";
import { MenuCategory } from "../../components";

export class Menu extends React.Component {
  render() {
    const { sandwiches, breads, addToOrder } = this.props;

    return (
      <div className="menu">
        <h1>Menu</h1>
        {sandwiches.map((category, i) => {
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
