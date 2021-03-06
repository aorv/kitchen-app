import React from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { hotPrice } from '../../data';
import { Price, OrderConfirmation } from '..';

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    const { price, canBeHeated } = this.props;
    this.state = {
      bread: 'Standard',
      isHot: !canBeHeated,
      total: price,
      modalOpen: false,
      owner: ''
    };

    this.action = this.action.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateOrderOwner = this.updateOrderOwner.bind(this);
    this.changeBread = this.changeBread.bind(this);
    this.changeHot = this.changeHot.bind(this);
  }

  changeBread(e) {
    const { breads, price, canBeHeated } = this.props;
    const { isHot } = this.state;
    const bread = breads[e.target.value].name;
    const breadPrice = breads[e.target.value].price;
    const sandwichPrice = price + breadPrice;
    const total = !isHot || !canBeHeated ? sandwichPrice : sandwichPrice + hotPrice;

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
    const { addToOrder, name, ownerId } = this.props;
    const { total, bread, isHot, owner } = this.state;

    addToOrder(
      name,
      total,
      bread,
      isHot,
      owner,
      ownerId
    );
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  updateOrderOwner(owner) {
    this.setState({ owner });
  }

  render() {
    const { name, breads, canBeHeated } = this.props;
    const { value, total, modalOpen, bread, isHot } = this.state;
    const sandwich = { name, bread, total, isHot };
    const hotSwitchLabel = <small>Hot? (+<Price value={hotPrice} />)</small>;

    return (
      <li className="menu-item">
        <p>
          {name}
          <span className="menu-item__price">
            &pound;{total.toFixed(2)}
          </span>
        </p>
        <div className="row">
          <FormControl>
            <InputLabel shrink>Bread</InputLabel>
            <Select
              native
              value={value}
              onChange={this.changeBread}
            >
              {breads.map((item, i) => {
                const { name, price } = item;

                return (
                  <option key={i} value={i}>
                    {name} (+&pound;{price.toFixed(2)})
                  </option>
                );
              })}
            </Select>
          </FormControl>
          {canBeHeated && (
            <FormControlLabel
              control={(
                <Switch
                  onChange={this.changeHot}
                />
              )}
              label={hotSwitchLabel}
            />
          )}
          <Button size="small" variant="contained" color="primary" onClick={this.openModal}>+ Add</Button>
          <OrderConfirmation
            updateOrderOwner={this.updateOrderOwner}
            sandwich={sandwich}
            addToOrder={this.action}
            closeModal={this.closeModal}
            open={modalOpen}
          />
        </div>
      </li>
    );
  }
}
