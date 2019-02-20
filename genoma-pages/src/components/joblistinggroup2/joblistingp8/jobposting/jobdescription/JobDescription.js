import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  ListItemIcon,
  ListItemText,
  List
} from "@material-ui/core";
import { OpenInNewOutlined } from "@material-ui/icons";
import ListItemLink from "../../../../common/RouterLink/ListitemLink";
import MceEditor from "./mceeditor/MceEditor";

const styles = theme => ({
  noPadding: {
    padding: 0
  },
  noMargin: {
    margin: 0
  },
  listItemTextRoot: {
    flex: "0 1 auto",
    marginLeft: 4
  },
  lightFontWeight: {
    fontWeight: 300
  },
  listItemFlexEnd: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start"
    }
  }
});

class JobDescription extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} sm={12} lg={4}>
          <Typography variant="h6" className={classes.lightFontWeight}>
            Job Description
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={8}>
          <List>
            <ListItemLink
              to="/descriptiontemplates"
              className={classes.noPadding}
              listitemflexend={classes.listItemFlexEnd}
            >
              <ListItemIcon className={classes.noMargin}>
                <OpenInNewOutlined className={classes.listTextIcon} />
              </ListItemIcon>
              <ListItemText
                primary="Hiring Resources: Free job description templates"
                className={classes.noPadding}
                classes={{
                  root: classes.listItemTextRoot,
                  primary: classes.listText
                }}
              />
            </ListItemLink>
          </List>
        </Grid>
        <Grid item xs={12}>
          <MceEditor />
        </Grid>
        <Grid container style={{ paddingTop: 22 }}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              className={classes.lightFontWeight}
              style={{ paddingBottom: 8 }}
            >
              Job Description
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <MceEditor />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

JobDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobDescription);
