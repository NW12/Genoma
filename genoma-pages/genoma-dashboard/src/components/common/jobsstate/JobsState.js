import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  FormControl,
  InputLabel,
  Select,
  Divider,
  Input,
  Grid
} from "@material-ui/core";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  Fullscreen,
  RemoveRedEye,
  FileCopy,
  CheckBoxOutlined,
  Star,
  HelpOutline,
  ArchiveOutlined
} from "@material-ui/icons";

const styles = theme => ({
  actions: {
    display: "flex"
  },

  card: {
    width: 282,
    height: 615,
    padding: "10px 20px 25px 20px"
  },
  jobStateTitle: {
    fontWeight: "300"
  },
  topBtn: {
    marginTop: 20,
    marginBottom: 15
  },
  noPadding: {
    padding: 0
  },
  listText: {
    fontSize: 12,
    fontWeight: "400"
  },
  listTextIcon: {
    fontSize: 19
  },
  listTextMargin: {
    marginTop: 10
  },
  btn: {
    color: "#ffffff",
    fontWeight: "300",
    fontSize: 14
  },
  buttonSave: {
    marginRight: 10
  },
  formControl: {
    width: "100%"
  },
  formControlLabel: {
    fontSize: 13,
    fontWeight: "300"
  },
  savedInfo: {
    fontSize: 12,
    fontWeight: "300"
  },
  notifyTitle: {
    fontSize: 14,
    fontWeight: "400"
  },
  noFlexText: {
    flex: "0 1 auto"
  },
  textField: {
    fontSize: 13,
    fontWeight: "300",
    marginBottom: 12
  },
  checkboxLabel: {
    fontSize: 12,
    fontWeight: "400"
  },
  editJobBtn: {
    marginTop: 10
  },
  checkBoxPadding: {
    padding: "6px 8px 6px 12px"
  }
});

class JobsState extends React.Component {
  state = {
    country: "",
    draft: "",
    labelWidth: 0
  };
  handleDraftChange = draft => event => {
    this.setState({ [draft]: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.card}>
        <Typography variant="h6" className={classes.jobStateTitle}>
          Jobs State
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="draft" className={classes.formControlLabel}>
            Draft
          </InputLabel>
          <Select
            native
            value={this.state.draft}
            onChange={this.handleDraftChange("draft")}
            inputProps={{
              name: "draft",
              id: "draft"
            }}
          >
            <option value="" />
            <option value="draft1">draft1</option>
            <option value="draft2">draft2</option>
            <option value="draft3">draft3</option>
          </Select>
        </FormControl>
        <div className={classes.topBtn}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={`${classes.btn} ${classes.buttonSave}`}
          >
            SAVE
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.btn}
          >
            PUBLISH
          </Button>
        </div>

        <Typography variant="body1" className={classes.savedInfo}>
          Saved, a few seconds ago
        </Typography>

        <Divider className={classes.listTextMargin} />

        <List className={classes.noPadding}>
          <ListItem
            className={classNames(classes.noPadding, classes.listTextMargin)}
          >
            <ListItemIcon>
              <RemoveRedEye className={classes.listTextIcon} />
            </ListItemIcon>
            <ListItemText
              primary="Preview Job"
              className={classes.noPadding}
              classes={{ primary: classes.listText }}
            />
          </ListItem>
          <ListItem
            className={classNames(classes.noPadding, classes.listTextMargin)}
          >
            <ListItemIcon>
              <FileCopy className={classes.listTextIcon} />
            </ListItemIcon>
            <ListItemText
              primary="Duplicate"
              className={classes.noPadding}
              classes={{ primary: classes.listText }}
            />
          </ListItem>
          <ListItem
            className={classNames(classes.noPadding, classes.listTextMargin)}
          >
            <ListItemIcon>
              <ArchiveOutlined className={classes.listTextIcon} />
            </ListItemIcon>
            <ListItemText
              primary="Archive"
              className={classes.noPadding}
              classes={{ primary: classes.listText }}
            />
          </ListItem>
          <ListItem
            className={classNames(classes.noPadding, classes.listTextMargin)}
          >
            <ListItemIcon>
              <Fullscreen className={classes.listTextIcon} />
            </ListItemIcon>
            <ListItemText
              primary="No-distraction mode"
              className={classes.noPadding}
              classes={{ primary: classes.listText }}
            />
          </ListItem>
        </List>

        <List className={classNames(classes.noPadding, classes.listTextMargin)}>
          <ListItem className={classes.noPadding}>
            <ListItemText
              className={classes.noPadding}
              primary="Send Notifications to:"
              classes={{
                root: classes.noFlexText,
                primary: classes.notifyTitle
              }}
            />
            <ListItemIcon style={{ margin: "0px 0px 0px 5px" }}>
              <HelpOutline style={{ fontSize: 18 }} />
            </ListItemIcon>
          </ListItem>
        </List>

        <Input
          fullWidth
          placeholder="Email Adress  to recieve notifications"
          className={classes.textField}
          inputProps={{
            "aria-label": "Description"
          }}
        />

        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlank fontSize="small" />}
                checkedIcon={<CheckBoxOutlined fontSize="small" />}
                value="daily-notification"
                classes={{ root: classes.checkBoxPadding }}
              />
            }
            label="Daily notification summary"
            classes={{ label: classes.listText }}
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlank fontSize="small" />}
                checkedIcon={<CheckBoxOutlined fontSize="small" />}
                value="weekly-notification"
                classes={{ root: classes.checkBoxPadding }}
              />
            }
            label="Weekly notification summary"
            classes={{ label: classes.listText }}
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlank fontSize="small" />}
                checkedIcon={<CheckBoxOutlined fontSize="small" />}
                value="checkedI"
                classes={{ root: classes.checkBoxPadding }}
              />
            }
            label="Notify for every new candidate"
            classes={{ label: classes.listText }}
          />
        </FormGroup>

        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
          style={{ marginTop: 15 }}
        >
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.btn}
            >
              EDIT IDEA GENOMA
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={`${classes.btn} ${classes.editJobBtn}`}
            >
              EDIT JOB
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

JobsState.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobsState);
