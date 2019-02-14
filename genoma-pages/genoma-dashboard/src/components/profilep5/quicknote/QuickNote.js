import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, TextField } from "@material-ui/core";
import AnchorLink from "../../common/RouterLink/AnchorLink";

const styles = theme => ({
  quickNotePaper: {
    // width: 270,
    height: 184,
    padding: "14px 19px 18px 18px",
    marginBottom: 22,
    [theme.breakpoints.up("sm")]: {
      marginRight: 15
    }
  },
  quickNoteHeading: {
    fontWeight: "300"
  },
  textField: {
    fontSize: 12,
    fontWeight: "500"
  },
  linkStyle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#ff008a",
    textDecoration: "none"
  }
});

class QuickNote extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.quickNotePaper}>
        <Typography variant="h6" className={classes.quickNoteHeading}>
          Quick Note
        </Typography>
        <TextField
          id="outlined-bare"
          className={classes.textField}
          placeholder="I like your work.."
          margin="dense"
          variant="outlined"
          multiline
          fullWidth
          rows={3}
        />
        <div style={{ textAlign: "center" }}>
          <AnchorLink to="/viewallnotes" className={classes.linkStyle}>
            View All Notes
          </AnchorLink>{" "}
        </div>
      </Paper>
    );
  }
}

QuickNote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuickNote);
