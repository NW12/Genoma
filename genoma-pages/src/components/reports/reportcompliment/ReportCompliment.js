import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Button } from "@material-ui/core";
import { Publish, Share, Flag } from "@material-ui/icons";

const styles = theme => ({
  reportComplimentPaper: {
    // width: "100%",
    position: "relative",
    marginBottom: 20,
    [theme.breakpoints.down("xs")]: {
      padding: "20px 15px 12px 22px"
    },
    [theme.breakpoints.down("lg")]: {
      padding: "30px 15px 22px 22px"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "45px 15px 32px 27px"
    }
  },
  wrapper: {
    height: 46,
    width: 46,
    borderRadius: 2,
    position: "absolute",
    backgroundColor: "#ff008a",
    textAlign: "center",
    padding: "11px 10px 9px 12px",
    top: "-16%",
    [theme.breakpoints.down("sm")]: {
      top: "-13%"
    },
    [theme.breakpoints.down("xs")]: {
      top: "-8%"
    }
  },
  gridButtons: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: 10,
      marginBottom: 10
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "right"
    }
  },
  btnShare: {
    padding: "12px 24px 11px 19px",
    backgroundColor: "#2ebed4",
    borderRadius: 3,
    fontWeight: "500",
    fontSize: 14,
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#2ebed4"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "12px 6px 11px 8px"
    },
    [theme.breakpoints.between("md", "lg")]: {
      padding: "12px 15px 11px 12px"
    }
  },
  btnPdf: {
    padding: "12px 19px 11px 21px",
    backgroundColor: "#ff9800",
    borderRadius: 3,
    fontWeight: "500",
    fontSize: 14,
    color: "#ffffff",
    marginLeft: 9,
    "&:hover": {
      backgroundColor: "#ff9800"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "12px 8px 11px 6px"
    },
    [theme.breakpoints.between("md", "lg")]: {
      padding: "12px 12px 11px 15px"
    }
  },
  leftIcon: {
    fontSize: 19,
    marginRight: 8
  },
  iconPdf: {
    transform: "rotate(180deg)"
  },
  flagIcon: {
    color: "#ffffff",
    fontSize: 21
  }
});

class ReportCompliment extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.reportComplimentPaper}>
        <div className={classes.wrapper}>
          <Typography component="i">
            <Flag style={{ color: "#ffffff" }} />
          </Typography>
        </div>
        <Grid container>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h6">
                Thank you for completing this process!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.gridButtons}>
              <Button variant="contained" className={classes.btnShare}>
                <Share className={classes.leftIcon} />
                SHARE
              </Button>
              <Button variant="contained" className={classes.btnPdf}>
                <Publish
                  className={classNames(classes.leftIcon, classes.iconPdf)}
                />
                DOWNLOAD PDF
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Here’s a feedback of your results in the game and assessment.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

ReportCompliment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReportCompliment);
