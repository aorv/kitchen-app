import React from "react";
import { sandwiches, breads } from "../data";
import { MenuItem } from "./MenuItem";

export class Menu extends React.Component {
  render() {
    const { name, price, addToOrder } = this.props;

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
