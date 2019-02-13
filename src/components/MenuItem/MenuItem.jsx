import React from "react";
import { hotPrice } from "../../data"

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bread: "Standard",
      isHot: false,
      total: this.props.price
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
    const { name, breads } = this.props;
    const { total } = this.state;

    return (
      <div className="menu__item">
        <p>
          {name}
          <span className="menu__item-price">
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
        <label onChange={this.changeHot}>
          <input type="checkbox" /> <small>Hot? (+£{hotPrice.toFixed(2)})</small>
        </label>
        <button onClick={this.action}>+ Add</button>
      </div>
    );
  }
}
