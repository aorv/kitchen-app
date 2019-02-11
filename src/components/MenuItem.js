import React from "react";

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bread: "Standard",
      isHot: false,
      hotPrice: 0.2,
      total: this.props.price
    };
  }

  addBread(event) {
    let breadName = this.props.breads[event.target.value].name;
    let breadPrice = this.props.breads[event.target.value].price;
    let total = this.props.price + breadPrice;

    this.setState({
      bread: breadName,
      total: !this.state.isHot ? total : total + this.state.hotPrice
    });
  }

  addHot() {
    const hotPrice = this.state.hotPrice;
    let isHot = this.state.isHot ? false : true;

    this.setState({
      isHot: isHot,
      total: isHot ? this.state.total + hotPrice : this.state.total - hotPrice
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
    const { name, price, breads } = this.props;

    return (
      <div className="menu__item">
        <p>
          {name}
          <span className="menu__item-price">
            &pound;{this.state.total.toFixed(2)}
          </span>
        </p>
        <select value={this.state.value} onChange={this.addBread.bind(this)}>
          {breads.map((bread, i) => {
            const { name, price } = bread;
            return (
              <option key={i} value={i}>
                {name} (+&pound;{price.toFixed(2)})
              </option>
            );
          })}
        </select>
        <label onChange={this.addHot.bind(this)}>
          <input type="checkbox" /> <small>Hot? (+£0.20)</small>
        </label>
        <button onClick={this.action.bind(this)}>+ Add</button>
      </div>
    );
  }
}
