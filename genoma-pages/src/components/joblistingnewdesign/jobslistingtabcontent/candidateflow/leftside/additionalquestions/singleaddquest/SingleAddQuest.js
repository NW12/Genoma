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
import SingleQuestAction from "./singlequestaction/SingleQuestAction";

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
  }
};

const SingleAddQuest = props => {
  const { classes } = props;

  return (
    <Paper className={classes.cardSetting}>
      <Grid container>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <SingleQuestAction mandatoryValue="true" />
        </Grid>
      </Grid>
    </Paper>
  );
};

SingleAddQuest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleAddQuest);
