import React from "react";
import PropTypes from "prop-types";
import AnchorLink from "../../common/RouterLink/AnchorLink";
import {
  withStyles,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Grid
} from "@material-ui/core";
import { EmailOutlined, CallOutlined } from "@material-ui/icons";

import DashGenomaFooterLogo from "../../../assets/images/dashboardFooter-logo.png";

const styles = {
  root: {
    backgroundColor: "#202020",
    zIndex: 1400
  },
  noPadding: {
    padding: 0,
    marginRight: 27
  },

  iconMargin: {
    marginRight: 8
  },

  listText: {
    color: "#828282",
    fontSize: 16,
    fontWeight: 300
  },
  footerLogo: {
    textAlign: "right"
  },
  container: {
    padding: "23px 0px 27px 10px"
  },

  "@media (max-width: 600px)": {
    container: {
      padding: "15px 0px 17px 16px"
    },

    footerlogo: {
      marginLeft: "auto"
    }
  },

  "@media (min-width: 600px)": {
    root: {
      width: "calc(100% - 190px)",
      marginLeft: 189
    },
    flexForm: {
      display: "flex",
      flexDirection: "row",
      justify: "flex-start",
      alignItems: "flex-start"
    }
  },

  "@media (min-width: 960px)": {
    noPadding: {
      width: 226
    },
    footerlogo: {
      textAlign: "right",
      paddingRight: 20
    },
    flexForm: {
      display: "flex",
      flexDirection: "row",
      justify: "flex-start",
      alignItems: "center"
    }
  },
  "@media (min-width: 1280px)": {
    footerlogo: {
      textAlign: "right"
    }
  }
};
const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6}>
          <List className={classes.flexForm}>
            <ListItem className={classes.noPadding}>
              <ListItemIcon className={classes.iconMargin}>
                <EmailOutlined className={classes.listText} />
              </ListItemIcon>
              <ListItemText
                primary="support@genomawork.com"
                className={classes.noPadding}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <ListItemIcon className={classes.iconMargin}>
                <CallOutlined className={classes.listText} />
              </ListItemIcon>
              <ListItemText
                primary="+92 354 3543564"
                className={classes.noPadding}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} className={classes.footerlogo}>
          <Typography color="inherit">
            <strong>
              <AnchorLink to="/">
                <img src={DashGenomaFooterLogo} alt="Dashboard Footer Logo" />
              </AnchorLink>
            </strong>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
