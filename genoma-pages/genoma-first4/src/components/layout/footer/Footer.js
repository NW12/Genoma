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

import footerlogo from "../../../assets/images/footer-logo.png";

const styles = {
  root: {
    backgroundColor: "#202020",
    color: "#949494"
  },
  linkStyle: {
    color: "#e84a78",
    textDecoration: "none"
  },
  listText: {
    color: "#434343"
  },

  noPadding: {
    padding: 0
  },

  iconMargin: {
    marginRight: 8
  },
  container: {
    padding: "23px 15px 27px 15px"
  },

  "@media (min-width: 600px)": {
    container: {
      maxWidth: 594
    }
  },
  "@media (min-width: 960px)": {
    footerlogo: {
      textAlign: "right"
    },
    flexForm: {
      display: "flex",
      flexDirection: "row",
      justify: "flex-start",
      alignItems: "center"
    },
    container: {
      maxWidth: 938,
      alignItems: "center",
      justify: "center"
    }
  },
  "@media (min-width: 1280px)": {
    footerlogo: {
      textAlign: "right"
    },
    container: {
      maxWidth: 1170
    }
  },
  "@media (min-width: 1920px)": {
    container: {
      maxWidth: 1872
    }
  }
};
const Footer = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6}>
          <Typography
            component="p"
            variant="body1"
            color="inherit"
            className={classes.footersize}
          >
            Are you experiencing a technical issue? Please contact{" "}
            <AnchorLink to="/support" className={classes.linkStyle}>
              genomawork
            </AnchorLink>{" "}
            support .
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.footerlogo}>
          <Typography color="inherit">
            <strong>
              <AnchorLink to="/">
                <img src={footerlogo} alt="Footer Logo" />
              </AnchorLink>
            </strong>
          </Typography>
        </Grid>
        <List className={classes.flexForm} disablePadding>
          <Grid item xs={12}>
            <ListItem className={classes.noPadding} style={{ marginRight: 16 }}>
              <ListItemIcon className={classes.iconMargin}>
                <EmailOutlined className={classes.listText} />
              </ListItemIcon>
              <ListItemText
                primary="support@genomawork.com"
                className={classes.noPadding}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </List>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
