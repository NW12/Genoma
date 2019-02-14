import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import avatarcard from "../../../../assets/images/avatarcard.png";

import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import {
  CheckBoxOutlineBlank,
  Edit,
  AccessTime,
  TurnedIn,
  ThumbUp
} from "@material-ui/icons";

const styles = theme => ({
  cardSetting: {
    overflow: "auto",
    maxHeight: 417,
    minHeight: 417,
    [theme.breakpoints.down("xs")]: {
      marginTop: 10
    }
  },
  checkBoxLists: {
    width: "100%",
    padding: 0
  },
  leftIcon: {
    marginRight: 8
  },
  btnApplied: {
    fontSize: "18px",
    fontWeight: 300
  },
  btnAppliedNumberSize: {
    fontSize: "14px",
    fontWeight: 500
  },
  listRoot: {
    padding: 0
  },
  cardContentRoot: {
    padding: 8,
    "&:last-child:not(:only-child)": {
      paddingBottom: 13
    }
  },
  listItemRoot: {
    backgroundColor: "#f6f6f6",
    paddingLeft: 6,
    paddingRight: 10,
    marginBottom: 6
  },
  primaryText: {
    fontSize: "16px",
    fontWeight: 500
  },
  secondaryText: {
    fontSize: "12px",
    fontWeight: 300
  },
  secondaryIcon: {
    fontSize: 13,
    verticalAlign: "text-top"
  },
  noPadding: {
    padding: 0
  },
  secondaryActionButton: {
    padding: 0
  },
  ListItemTextRoot: {
    padding: "0px 8px"
  },
  cardActionRoot: {
    padding: "20px 10px 0px 10px"
  },

  checkboxIconSize: {
    fontSize: 18,
    borderRadius: 2,
    marginLeft: 3,
    marginRight: 3
  },
  checkedIconColor: {
    backgroundColor: "#ff008a"
  },
  "@media (max-width: 1450px) and (min-width:1280px)": {
    btnApplied: {
      fontSize: 15,
      fontWeight: "500"
    },
    cardActionRoot: {
      padding: "20px 5px 0px 5px"
    }
  }
});

class CandidateProfiledCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.cardSetting}>
        <CardActions classes={{ root: classes.cardActionRoot }}>
          <List className={classes.checkBoxLists}>
            <ListItem
              role={undefined}
              dense
              button
              className={classes.noPadding}
            >
              <Checkbox
                className={classes.noPadding}
                icon={<CheckBoxOutlineBlank />}
                checkedIcon={
                  <CheckBoxOutlineBlank
                    color="primary"
                    className={classNames(
                      classes.checkboxIconSize,
                      classes.checkedIconColor
                    )}
                  />
                }
              />
              <ListItemText
                className={classes.noPadding}
                primary={
                  <span className={classes.btnApplied}>
                    Profiled{" "}
                    <span className={classes.btnAppliedNumberSize}>(3)</span>
                  </span>
                }
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Edit" className={classes.noPadding}>
                  <Edit />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </CardActions>
        <CardContent classes={{ root: classes.cardContentRoot }}>
          <List className={classes.listRoot}>
            <ListItem classes={{ root: classes.listItemRoot }}>
              <ListItemAvatar>
                <Avatar
                  alt="Card Avatar"
                  src={avatarcard}
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Universal Alberto"
                secondary={
                  <span>
                    <span>
                      {" "}
                      <AccessTime className={classes.secondaryIcon} /> 2d ago
                    </span>
                    <span>
                      {" "}
                      <ThumbUp className={classes.secondaryIcon} /> 88%
                    </span>
                  </span>
                }
                classes={{
                  root: classes.ListItemTextRoot,
                  primary: classes.primaryText,
                  secondary: classes.secondaryText
                }}
              />
              <ListItemSecondaryAction>
                <IconButton classes={{ root: classes.secondaryActionButton }}>
                  <TurnedIn style={{ color: "#4caf50" }} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem classes={{ root: classes.listItemRoot }}>
              <ListItemAvatar>
                <Avatar
                  alt="Card Avatar"
                  src={avatarcard}
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Universal Alberto"
                secondary={
                  <span>
                    <span>
                      {" "}
                      <AccessTime className={classes.secondaryIcon} /> 2d ago
                    </span>
                    <span>
                      {" "}
                      <ThumbUp className={classes.secondaryIcon} /> 88%
                    </span>
                  </span>
                }
                classes={{
                  root: classes.ListItemTextRoot,
                  primary: classes.primaryText,
                  secondary: classes.secondaryText
                }}
              />
              <ListItemSecondaryAction>
                <IconButton classes={{ root: classes.secondaryActionButton }}>
                  <TurnedIn style={{ color: "#7d7d7d" }} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              classes={{ root: classes.listItemRoot }}
              style={{ marginBottom: 0 }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Card Avatar"
                  src={avatarcard}
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Universal Alberto"
                secondary={
                  <span>
                    <span>
                      {" "}
                      <AccessTime className={classes.secondaryIcon} /> 2d ago
                    </span>
                    <span>
                      {" "}
                      <ThumbUp className={classes.secondaryIcon} /> 88%
                    </span>
                  </span>
                }
                classes={{
                  root: classes.ListItemTextRoot,
                  primary: classes.primaryText,
                  secondary: classes.secondaryText
                }}
              />
              <ListItemSecondaryAction>
                <IconButton classes={{ root: classes.secondaryActionButton }}>
                  <TurnedIn style={{ color: "#4caf50" }} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }
}

CandidateProfiledCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CandidateProfiledCard);
