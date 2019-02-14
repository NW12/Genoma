import React from "react";
import PropTypes from "prop-types";
import { MoreHoriz } from "@material-ui/icons";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "initial"
  },
  icon: {
    marginRight: 8
  },
  menuListRoot: {
    padding: "13px auto  10px 14px"
  },
  menuItemPrimary: {
    fontSize: 13,
    fontWeight: "300",
    padding: "0px 15px 0px 14px"
  }
});

class MenuListComposition extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <MoreHoriz />
        </Button>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          style={{ zIndex: 1, width: 130, height: 134 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList className={classes.menuListRoot}>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.menuItemPrimary}
                    >
                      View Detail
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.menuItemPrimary}
                    >
                      Duplicate
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.menuItemPrimary}
                    >
                      Share
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.menuItemPrimary}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.menuItemPrimary}
                    >
                      Delete
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuListComposition);
