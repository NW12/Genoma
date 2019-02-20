import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import SingleVideoAction from "./singlevideoaction/SingleVideoAction";
import { AccessTime } from "@material-ui/icons";

const styles = {
  cardSetting: {
    padding: "7px 15px 7px 15px",
    marginBottom: 9
  },
  listText: {
    fontSize: 14,
    lineHeight: 1.0,
    fontWeight: "300"
  },
  noPadding: {
    padding: 0
  },
  listItemIconRoot: {
    marginRight: 10
  },
  listTextIcon: {
    fontSize: 16
  }
};

const SingleVideoInterview = props => {
  const { classes } = props;

  return (
    <Paper className={classes.cardSetting}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <List className={classes.listSetting}>
                <ListItem className={classes.noPadding}>
                  <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                    {props.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={props.primaryText}
                    className={classes.noPadding}
                    classes={{ primary: classes.listText }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <List className={classes.listSetting}>
                <ListItem className={classes.noPadding}>
                  <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                    <AccessTime className={classes.listTextIcon} />
                  </ListItemIcon>
                  <ListItemText
                    primary={props.primaryTimeText}
                    className={classes.noPadding}
                    classes={{ primary: classes.listText }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <SingleVideoAction mandatoryValue="true" />
        </Grid>
      </Grid>
    </Paper>
  );
};

SingleVideoInterview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleVideoInterview);
