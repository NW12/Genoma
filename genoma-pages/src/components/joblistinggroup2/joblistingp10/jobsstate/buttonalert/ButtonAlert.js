import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText
} from "@material-ui/core";

class ButtonAlert extends React.Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {this.props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {this.props.contenttext}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} variant="text">
            Cancel
          </Button>
          <Button
            onClick={this.props.onClose}
            variant="contained"
            color="primary"
            autoFocus
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ButtonAlert;
