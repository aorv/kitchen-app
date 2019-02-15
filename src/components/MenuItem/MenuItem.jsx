import React from "react";
import { hotPrice } from "../../data"

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    const { price, canBeHeated } = this.props;
    this.state = {
      bread: "Standard",
      isHot: !canBeHeated,
      total: price
    };

    this.action = this.action.bind(this);
    this.changeBread = this.changeBread.bind(this);
    this.changeHot = this.changeHot.bind(this);
  }

  changeBread(e) {
    const { breads, price } = this.props;
    const { isHot } = this.state;
    const bread = breads[e.target.value].name;
    const breadPrice = breads[e.target.value].price;
    const sandwichPrice = price + breadPrice;
    const total = !isHot ? sandwichPrice : sandwichPrice + hotPrice;

    this.setState({
      bread,
      total
    });
  }

  changeHot(e) {
    let { total } = this.state;
    const isHot = e.target.checked;
    const hotPriceAlteration = isHot ? hotPrice : -Math.abs(hotPrice);
    total += hotPriceAlteration;

    this.setState({
      isHot,
      total
    });
  }

  action() {
    const { addToOrder, name } = this.props;
    const { total, bread, isHot } = this.state;

    addToOrder(
      name,
      total,
      bread,
      isHot
    );
  }

  render() {
    const { name, breads, canBeHeated } = this.props;
    const { total } = this.state;

    return (
      <li className="menu-item">
        <p>
          {name}
          <span className="menu-item__price">
            &pound;{total.toFixed(2)}
          </span>
        </p>
        <select value={this.state.value} onChange={this.changeBread}>
          {breads.map((bread, i) => {
            const { name, price } = bread;
            return (
              <option key={i} value={i}>
                {name} (+&pound;{price.toFixed(2)})
              </option>
            );
          })}
        </select>
        {canBeHeated &&
          <label onChange={this.changeHot}>
            <input type="checkbox" /> <small>Hot? (+£{hotPrice.toFixed(2)})</small>
          </label>
        }
        <button onClick={this.action}>+ Add</button>
      </li>
    );
  }
}
