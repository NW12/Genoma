import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia, Card } from "@material-ui/core";
import video from "../../../assets/images/video.png";

const styles = theme => ({
  profileVideoCard: {
    // width: 462,
    height: 361,
    padding: "12px 7px 11px 9px",
    marginBottom: 10,
    [theme.breakpoints.up("sm")]: {
      marginRight: 15
    }
  },

  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover",
    height: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  }
});

class QuickNote extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.profileVideoCard}>
        <CardMedia
          component="img"
          alt="video in reports"
          className={classes.media}
          image={video}
          title="video in reports"
        />
      </Card>
    );
  }
}

QuickNote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuickNote);
