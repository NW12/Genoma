import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import ExportExcelIcon from "../../../assets/images/file-excel.png";
import { Button, Typography, Grid } from "@material-ui/core";
import { Add, Share, CheckBoxOutlineBlankOutlined } from "@material-ui/icons";
import JobPositionMenu from "./jobpositionmenulist/JobPositionMenu";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  btn: {
    padding: "8px 24px",
    borderRadius: "3px",
    fontWeight: 700,
    fontSize: "14px",
    marginRight: 10
  },
  btnBulk: {
    padding: "8px 18px",
    backgroundColor: "#5f5f5f",
    borderRadius: "3px",
    fontWeight: 300,
    fontSize: "13px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#5f5f5f"
    }
  },
  btnYellow: {
    padding: "8px 18px",
    marginLeft: "5px",
    backgroundColor: "#ff9800",
    borderRadius: "3px",
    fontWeight: 300,
    fontSize: "13px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#ff9800"
    }
  },
  iconButtons: {
    padding: "8px 8px",
    backgroundColor: "#2ebed4",
    borderRadius: "3px",
    color: "#ffffff",
    marginLeft: "8px",
    "&:hover": {
      backgroundColor: "#2ebed4"
    }
  },
  whiteColor: {
    color: "#ffffff"
  },
  flatButtonColor: {
    color: "#6d6d6d"
  },
  JobPositionTitle: {
    marginBottom: 30
  },
  leftButton: {
    textAlign: "right"
  },

  btnLarge: {
    minHeight: 42,
    maxHeight: 42
  },

  "@media (max-width: 960px)": {
    btn: {
      paddingLeft: 20,
      paddingRight: 20,
      fontWeight: 700,
      fontSize: "12px",
      marginRight: 10
    },
    btnBulk: {
      paddingLeft: 10,
      paddingRight: 15
    },
    bulkIconSize: {
      fontSize: 20
    },
    btnYellow: {
      paddingLeft: 13,
      paddingRight: 13
    },
    iconButtons: {
      paddingLeft: 8,
      paddingRight: 8
    },
    iconButtonsSize: {
      fontSize: "27px"
    }
  },
  "@media (max-width: 600px)": {
    leftButton: {
      textAlign: "left",
      marginTop: 13
    },
    btn: {
      paddingRight: 30,
      paddingLeft: 31,
      fontSize: 14,
      marginRight: 15
    },

    btnBulk: {
      paddingRight: 8,
      paddingLeft: 10,
      marginBottom: 13
    },
    bulkIconSize: {
      fontSize: 20
    },

    btnYellow: {
      paddingRight: 11,
      paddingLeft: 11,
      marginLeft: "20px",
      marginBottom: 13
    },

    iconButtons: {
      paddingRight: 8,
      paddingLeft: 8,
      marginLeft: "25px"
    },
    iconButtonsSize: {
      fontSize: "27px"
    }
  }
});

const JobPositionButtons = props => {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.JobPositionTitle}>
          Candidates
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Button
            className={`${classes.whiteColor} ${classes.btn} ${
              classes.btnLarge
            }`}
            variant="contained"
            color="primary"
          >
            QUALIFIED
          </Button>
          <Button
            className={`${classes.flatButtonColor} ${classes.btn} ${
              classes.btnLarge
            }`}
            variant="text"
          >
            DISQUALIFIED
          </Button>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.leftButton}>
          <Button
            variant="contained"
            className={`${classes.btnBulk} ${classes.btnLarge}`}
          >
            <CheckBoxOutlineBlankOutlined
              style={{ backgroundColor: "#ffffff" }}
              className={classNames(classes.leftIcon, classes.bulkIconSize)}
            />
            BULK ACTIONS
          </Button>
          <Button
            variant="contained"
            className={` ${classes.btnYellow} ${classes.btnLarge}`}
          >
            <Add className={classes.leftIcon} />
            ADD CANDIDATE
          </Button>
          <Button
            variant="contained"
            className={`${classes.iconButtons} ${classes.btnLarge}`}
          >
            <img src={ExportExcelIcon} alt="export to excel icon" />
          </Button>
          <Button
            variant="contained"
            className={`${classes.iconButtons} ${classes.btnLarge}`}
          >
            <Share className={classes.iconButtonsSize} />
          </Button>
          <JobPositionMenu
            iconButtons={classes.iconButtons}
            iconButtonsSize={classes.iconButtonsSize}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

JobPositionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobPositionButtons);
