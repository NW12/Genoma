import React from "react";
import PropTypes from "prop-types";
import {
  MoreHoriz,
  Edit,
  Add,
  ArrowForward,
  Publish,
  AssignmentInd
} from "@material-ui/icons";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Button,
  Grid
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "initial"
  },
  icon: {
    marginRight: 8
  },
  primary: {
    fontSize: 15,
    fontWeight: "300"
  },
  textList: {
    padding: 0
  },
  "@media (min-width: 960px)": {
    btnLarge: {
      minHeight: 42
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
      <Grid className={classes.root}>
        <Button
          variant="contained"
          className={`${this.props.iconButtons} ${classes.btnLarge}`}
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <MoreHoriz className={this.props.iconButtonsSize} />
        </Button>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          style={{ zIndex: 1, width: 210 }}
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
                      <ListItemIcon className={classes.icon}>
                        <Edit />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Edit Job"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <ArrowForward />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Edit hiring workflow"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <AssignmentInd />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Edit recruiting team"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <Publish />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Upload CVs/Resume"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <Add />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Add Candidates"
                      />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuListComposition);
