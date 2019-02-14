import React from "react";
import PropTypes from "prop-types";
import { TurnedIn, ArrowDropDown, Done, Close } from "@material-ui/icons";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "initial"
  },
  iconText: {
    marginRight: 5
  },
  primary: {
    fontSize: 13,
    fontWeight: "300"
  },
  primaryFollow: {
    fontSize: 13,
    fontWeight: "300",
    color: "#50b154"
  },
  turnedinIcon: {
    fotnSize: 17
  },
  arrowDropDown: {
    fontSize: 7
  },
  textList: {
    padding: 0
  },
  menuBtn: {
    padding: 0,
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#ffffff"
    }
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
          variant="contained"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          className={classes.menuBtn}
          // aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <TurnedIn style={this.props.style} />
          <ArrowDropDown />
        </Button>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          style={{ zIndex: 1, width: 104, height: 69 }}
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
                  <MenuList>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.iconText}>
                        <Done style={{ color: "#50b154" }} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primaryFollow,
                          root: classes.textList
                        }}
                        inset
                        primary="Follow"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.iconText}>
                        <Close />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Unfollow"
                      />
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
