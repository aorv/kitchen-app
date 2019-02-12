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

  changeBread(event) {
    const { breads, price } = this.props;
    const bread = breads[event.target.value].name;
    const breadPrice = breads[event.target.value].price;
    const total = !this.state.isHot ? price + breadPrice : (price + breadPrice) + hotPrice;

    this.setState({
      bread,
      total
    });
  }

  changeHot(event) {
    const isHot = event.target.checked;
    const total = isHot ? this.state.total + hotPrice : this.state.total - hotPrice;

    this.setState({
      isHot,
      total
    });
  }

  action() {
    this.props.addToOrder(
      this.props.name,
      this.state.total,
      this.state.bread,
      this.state.isHot
    );
  }

  render() {
    const { name, breads } = this.props;

    return (
      <div className="menu__item">
        <p>
          {name}
          <span className="menu__item-price">
            &pound;{this.state.total.toFixed(2)}
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
