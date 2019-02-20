import React from "react";
import PropTypes from "prop-types";
import {
  Add,
  Remove,
  Notes,
  GpsFixed,
  Check,
  DoneAll,
  AttachFile,
  Videocam,
  Clear
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
  Grid,
  IconButton,
  ListItemSecondaryAction,
  Divider
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "initial"
  },
  paperRoot: {
    border: "1px solid #b8b8b8"
  },
  listTextIcon: {
    fontSize: 16
  },
  icon: {
    marginRight: 8
  },
  primary: {
    fontSize: 14,
    fontWeight: "300"
  },
  textList: {
    padding: 0
  },
  menuItem: {
    paddingTop: 6,
    paddingBottom: 6
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  headingMenu: {
    fontSize: 14,
    fontWeight: "500"
  },
  noPadding: {
    padding: 0
  },
  addBtnMain: {
    width: "100%",
    border: "2px dotted #4c4c4c",
    marginBottom: 9
  }
});

class AddNewBtn extends React.Component {
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
          variant="text"
          size="large"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
          className={classes.addBtnMain}
        >
          <Add className={classes.leftIcon} />
          ADD New
        </Button>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          style={{ zIndex: 1, width: 180 }}
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
              <Paper className={classes.paperRoot}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList className={classes.noPadding}>
                    <MenuItem className={classes.menuItem}>
                      <ListItemText
                        className={classes.noPadding}
                        primary={
                          <span className={classes.headingMenu}>
                            Answer Type
                          </span>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label="Close"
                          className={classes.noPadding}
                          onClick={this.handleClose}
                        >
                          <Clear className={classes.listTextIcon} />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </MenuItem>
                    <Divider />
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <Remove className={classes.listTextIcon} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Text(single line)"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <Notes className={classes.listTextIcon} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Text(multiple lines)"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <GpsFixed className={classes.listTextIcon} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Yes / No"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <Check className={classes.listTextIcon} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Single choice"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <DoneAll className={classes.listTextIcon} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Multiple choice"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <Videocam className={classes.listTextIcon} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Video answer"
                      />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <ListItemIcon className={classes.icon}>
                        <AttachFile className={classes.listTextIcon} />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.primary,
                          root: classes.textList
                        }}
                        inset
                        primary="Add a file"
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

AddNewBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddNewBtn);
