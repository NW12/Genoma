import React from "react";
import PropTypes from "prop-types";
import navbarDashGenomaLogo from "../../../assets/images/dashboardNav-logo.png";

import { Link } from "react-router-dom";
import {
  withStyles,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Paper,
  Typography,
  Input,
  InputLabel
} from "@material-ui/core";
import AnchorLink from "../../common/RouterLink/AnchorLink";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },

  submit: {
    marginTop: theme.spacing.unit * 3,
    color: "#ffffff",
    fontWeight: 500,
    fontSize: "14px",
    backgroundColor: "#ff008a",
    "&:hover": {
      backgroundColor: "#ff008a"
    }
  },

  cssLabel: {
    "&$cssFocused": {
      color: "#ff008a"
    }
  },
  cssFocused: {},

  cssUnderline: {
    "&:after": {
      borderBottomColor: "#ff008a"
    }
  }
});

function SignIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <strong>
          <AnchorLink to="/" className={classes.logo}>
            <img src={navbarDashGenomaLogo} alt="NavbarDash Genoma Logo" />
          </AnchorLink>
        </strong>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel
              htmlFor="email"
              classes={{
                root: classes.cssLabel,
                focused: classes.cssFocused
              }}
            >
              Email Address
            </InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              classes={{
                underline: classes.cssUnderline
              }}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel
              htmlFor="password"
              classes={{
                root: classes.cssLabel,
                focused: classes.cssFocused
              }}
            >
              Password
            </InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              classes={{
                underline: classes.cssUnderline
              }}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            className={classes.submit}
            size="large"
            variant="contained"
            component={Link}
            to="/admin"
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
