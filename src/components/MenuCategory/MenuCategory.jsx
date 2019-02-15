import React from "react";
import { MenuItem } from "../../components";

export class MenuCategory extends React.Component {
  render() {
    const { title, items, breads, addToOrder } = this.props;

    return (
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
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
