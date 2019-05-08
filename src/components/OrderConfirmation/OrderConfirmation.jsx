import React from 'react';
import { OrderItem } from '..';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export class OrderConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  handleClose() {
    const { closeModal } = this.props;
    closeModal();
  }

  addToOrder() {
    const { addToOrder } = this.props;
    addToOrder();
    this.handleClose();
  }

  handleChange(e) {
    const { updateOrderOwner } = this.props;
    updateOrderOwner(e.target.value);
  }

  render() {
    const { open, sandwich } = this.props;
    const { name, bread, total, isHot } = sandwich;

    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Your Sandwich</DialogTitle>
        <DialogContent>
          <ul className="order__items order__items--modal">
            <OrderItem
              name={name}
              price={total}
              bread={bread}
              isHot={isHot}
              hasButton={false}
            />
          </ul>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.addToOrder} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
