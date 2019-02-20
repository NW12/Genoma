import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  Select,
  Tooltip
} from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";

const styles = theme => ({
  listTextIcon: {
    fontSize: 16
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
  listItemTextRoot: {
    flex: "0 1 auto"
  },
  iconButtonAction: {
    padding: 0,
    marginLeft: 20
  }
});

class VideoAnswerTime extends React.Component {
  state = {
    videotime: "2min"
  };
  handleVideoTimeSelectChange = videotime => event => {
    this.setState({ [videotime]: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <Tooltip title="The maximum duration of video answer" placement="top">
        <List className={classes.noPadding}>
          <ListItem className={classes.noPadding}>
            <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
              <AccessTime className={classes.listTextIcon} />
            </ListItemIcon>
            <ListItemText
              className={classes.noPadding}
              classes={{
                primary: classes.listText,
                root: classes.listItemTextRoot
              }}
            >
              <FormControl className={classes.formControl}>
                <Select
                  native
                  value={this.state.videotime}
                  onChange={this.handleVideoTimeSelectChange("videotime")}
                  inputProps={{
                    name: "videotime",
                    id: "videotime"
                  }}
                  disableUnderline
                >
                  <option value="30sec">30 sec</option>
                  <option value="60sec">60 sec</option>
                  <option value="2min">2 min</option>
                  <option value="5min">5 min</option>
                  <option value="10min">10 min</option>
                </Select>
              </FormControl>
            </ListItemText>
          </ListItem>
        </List>
      </Tooltip>
    );
  }
}

VideoAnswerTime.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoAnswerTime);
