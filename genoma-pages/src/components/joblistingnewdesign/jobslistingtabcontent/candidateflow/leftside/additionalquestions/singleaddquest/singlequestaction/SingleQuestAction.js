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
  IconButton,
  Checkbox
} from "@material-ui/core";
import {
  Edit,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  MergeType,
  Star
} from "@material-ui/icons";

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
    marginRight: 10,
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto"
    }
  },
  listItemTextRoot: {
    flex: "0 1 auto"
  },
  iconButtonAction: {
    padding: 0,
    marginLeft: 20
  },
  checkBoxPadding: {
    padding: "0 8px 0 8px",
    color: "#787878"
  }
});

class SingleQuesAction extends React.Component {
  state = {
    mandatory: "false"
  };
  handleMandatorySelectChange = mandatory => event => {
    this.setState({ [mandatory]: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <List className={classes.noPadding}>
        <ListItem className={classes.noPadding}>
          <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
            {this.state.mandatory === "true" ? (
              <Star className={classes.listTextIcon} />
            ) : (
              <MergeType className={classes.listTextIcon} />
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
                value={this.state.mandatory}
                onChange={this.handleMandatorySelectChange("mandatory")}
                inputProps={{
                  name: "mandatory",
                  id: "mandatory"
                }}
                disableUnderline
              >
                <option value="false">Optional</option>
                <option value="true">Required</option>
              </Select>
            </FormControl>
          </ListItemText>
          <IconButton aria-label="Edit" className={classes.iconButtonAction}>
            <Edit className={classes.listTextIcon} />
          </IconButton>
          <Checkbox
            icon={<CheckBoxOutlineBlank fontSize="small" />}
            checkedIcon={<CheckBoxOutlined fontSize="small" />}
            value="additional-quest"
            classes={{ root: classes.checkBoxPadding }}
          />
        </ListItem>
      </List>
    );
  }
}

SingleQuesAction.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleQuesAction);
