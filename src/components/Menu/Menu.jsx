import React from "react";
import { MenuItem } from "../../components";

export class Menu extends React.Component {
  render() {
    const { sandwiches, breads, addToOrder } = this.props;

    return (
      <div className="menu">
        <h1>Menu</h1>
        {sandwiches.map((sandwich, i) => {
          const { name, price } = sandwich;
          return (
            <MenuItem
              key={i}
              name={name}
              price={price}
              addToOrder={addToOrder}
              breads={breads}
            />
          );
        })}
      </div>
    );
  }
}
