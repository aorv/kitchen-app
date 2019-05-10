import React from 'react';
import { OrderItem } from '..';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export const OrderConfirmation = ({
  open,
  sandwich: { name, bread, total, isHot },
  closeModal,
  addToOrder,
  updateOrderOwner
}) => {
  const handleClose = () => {
    closeModal();
  };

  const handleConfirm = () => {
    addToOrder();
    handleClose();
  };

  const handleChange = (e) => {
    updateOrderOwner(e.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
