import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  Select
} from "@material-ui/core";
import { Remove, Notes } from "@material-ui/icons";

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

class AddNewActionLeft extends React.Component {
  state = {
    newsection: "singleline"
  };
  handleNewSectionSelectChange = newsection => event => {
    this.setState({ [newsection]: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <List className={classes.noPadding}>
        <ListItem className={classes.noPadding}>
          <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
            {this.state.newsection === "singleline" ? (
              <Remove className={classes.listTextIcon} />
            ) : (
              <Notes className={classes.listTextIcon} />
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
                <option value="multiline">Text(Mulitple Lines)</option>
              </Select>
            </FormControl>
          </ListItemText>
        </ListItem>
      </List>
    );
  }
}

AddNewActionLeft.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddNewActionLeft);
