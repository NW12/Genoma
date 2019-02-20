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
  Grid
} from "@material-ui/core";
import { Remove, Videocam } from "@material-ui/icons";
import VideoAnswerTime from "./VideoAnswerTime";

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

class NewActionLeft extends React.Component {
  state = {
    newsection: "video-answer"
  };
  handleNewSectionSelectChange = newsection => event => {
    this.setState({ [newsection]: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <List className={classes.noPadding}>
              <ListItem className={classes.noPadding}>
                <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                  {this.state.newsection === "video-answer" ? (
                    <Videocam className={classes.listTextIcon} />
                  ) : (
                    <Remove className={classes.listTextIcon} />
                  )}
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
                      value={this.state.newsection}
                      onChange={this.handleNewSectionSelectChange("newsection")}
                      inputProps={{
                        name: "newsection",
                        id: "newsection"
                      }}
                      disableUnderline
                    >
                      <option value="singleline">Text(Single line)</option>
                      <option value="video-answer">Video Answer</option>
                    </Select>
                  </FormControl>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6}>
            {this.state.newsection === "video-answer" ? (
              <VideoAnswerTime />
            ) : (
              undefined
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

NewActionLeft.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewActionLeft);
