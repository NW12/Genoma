import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  Paper,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  FormControl,
  InputLabel,
  Select,
  Divider
} from "@material-ui/core";
import {
  Edit,
  EmailOutlined,
  LocationOn,
  Smartphone,
  Publish
} from "@material-ui/icons";
import Johndoe from "../../../assets/images/john-doe.png";

const styles = theme => ({
  actions: {
    display: "flex"
  },

  card: {
    // width: 342,
    height: 515,
    position: "relative",
    marginBottom: 10,
    [theme.breakpoints.up("sm")]: {
      marginRight: 15
    }
  },
  wrapper: {
    height: 120,
    width: 120,
    borderRadius: "100%",
    position: "absolute",
    left: "35%",
    top: "-10%",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
  },
  avatar: {
    width: "100%",
    height: "100%"
  },
  editButton: {
    visibility: "inherit",
    position: "absolute",
    content: "",
    backgroundColor: "#e5e5e5",
    width: 26,
    height: 26,
    top: 25,
    right: -8,
    borderRadius: "100%",
    zIndex: "1",
    "&:hover": {
      backgroundColor: "#e5e5e5"
    }
  },
  editIcon: {
    fontSize: 20
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    paddingTop: 80
  },
  noPadding: {
    padding: 0
  },
  listText: {
    fontSize: 14,
    fontWeight: "300"
  },
  listTextIcon: {
    fontSize: 19
  },
  listTextMargin: {
    marginTop: 15
  },
  listSetting: {
    padding: "24px 0 21px 24px"
  },
  buttonCv: {
    padding: "10px 27px 12px 23px",
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 16,
    marginRight: 11,
    borderRadius: 3,
    [theme.breakpoints.down("lg")]: {
      padding: "10px 17px 12px 13px"
    }
  },
  downloadPdf: {
    padding: "10px 19px 12px 22px",
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 14,
    marginRight: 11,
    borderRadius: 3,
    backgroundColor: "#ff9800",
    "&:hover": {
      backgroundColor: "#ff9800"
    },
    [theme.breakpoints.down("lg")]: {
      padding: "10px 9px 12px 12px"
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconCv: {
    fontSize: 21,
    transform: "rotate(180deg)"
  },
  iconPdf: {
    fontSize: 21,
    transform: "rotate(180deg)"
  },
  formControlRoot: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginTop: 3,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  formControlLabel: {
    fontSize: 16,
    fontWeight: "300"
  },
  iconButtonRoot: {
    padding: 0
  }
});

class ProfileWidget extends React.Component {
  state = {
    country: "",
    info: "",
    file: "",
    referral: "",
    labelWidth: 0
  };

  handleCountryChange = country => event => {
    this.setState({ [country]: event.target.value });
  };
  handleInfoChange = info => event => {
    this.setState({ [info]: event.target.value });
  };
  handleFilesChange = file => event => {
    this.setState({ [file]: event.target.value });
  };
  handleReferralsChange = referral => event => {
    this.setState({ [referral]: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.card}>
        <div className={classes.wrapper}>
          <IconButton
            className={classes.editButton}
            classes={{ root: classes.iconButtonRoot }}
          >
            <Edit className={classes.editIcon} />
          </IconButton>
          <Avatar alt="John Doe" src={Johndoe} className={classes.avatar} />
        </div>
        <CardContent className={classes.noPadding}>
          <Typography component="h3" variant="h3" className={classes.cardTitle}>
            JOHN DOE
          </Typography>
          <List className={classes.listSetting}>
            <ListItem className={classes.noPadding}>
              <ListItemIcon>
                <EmailOutlined className={classes.listTextIcon} />
              </ListItemIcon>
              <ListItemText
                primary="johndoe@gmail.com"
                className={classes.noPadding}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
            <ListItem
              className={classNames(classes.noPadding, classes.listTextMargin)}
            >
              <ListItemIcon>
                <Smartphone className={classes.listTextIcon} />
              </ListItemIcon>
              <ListItemText
                primary="+72 8658 8687"
                className={classes.noPadding}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
            <ListItem
              className={classNames(classes.noPadding, classes.listTextMargin)}
            >
              <ListItemIcon>
                <LocationOn className={classes.listTextIcon} />
              </ListItemIcon>
              <ListItemText
                primary="The Natherlands USA"
                className={classes.noPadding}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          </List>
          <Divider style={{ marginLeft: 8, marginRight: 8 }} />
          <div className={classes.formControlRoot}>
            <FormControl className={classes.formControl}>
              <InputLabel
                htmlFor="country-nationality"
                className={classes.formControlLabel}
              >
                Country & Nationality
              </InputLabel>
              <Select
                native
                value={this.state.country}
                onChange={this.handleCountryChange("country")}
                inputProps={{
                  name: "country",
                  id: "country-nationality"
                }}
              >
                <option value="" />
                <option value="Canada">Canada</option>
                <option value="United States of America">
                  United States of America
                </option>
                <option value="Mexico">Mexico</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel
                htmlFor="additional-information"
                className={classes.formControlLabel}
              >
                Additonal Information
              </InputLabel>
              <Select
                native
                value={this.state.info}
                onChange={this.handleInfoChange("info")}
                inputProps={{
                  name: "info",
                  id: "additional-information"
                }}
              >
                <option value="" />
                <option value="info1">info1</option>
                <option value="info2">info2</option>
                <option value="info3">info3</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel
                htmlFor="files-documents"
                className={classes.formControlLabel}
              >
                Files & Documents
              </InputLabel>
              <Select
                native
                value={this.state.file}
                onChange={this.handleFilesChange("file")}
                inputProps={{
                  name: "file",
                  id: "files-documents"
                }}
              >
                <option value="" />
                <option value="file1">file1</option>
                <option value="file2">file2</option>
                <option value="file3">file3</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel
                htmlFor="referrals"
                className={classes.formControlLabel}
              >
                Referrals
              </InputLabel>
              <Select
                native
                value={this.state.referral}
                onChange={this.handleReferralsChange("referral")}
                inputProps={{
                  name: "referral",
                  id: "referrals"
                }}
              >
                <option value="" />
                <option value="referral1">referral1</option>
                <option value="referral2">referral2</option>
                <option value="referral3">referral3</option>
              </Select>
            </FormControl>
          </div>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttonCv}
          >
            <Publish className={classNames(classes.leftIcon, classes.iconCv)} />
            CV
          </Button>
          <Button variant="contained" className={classes.downloadPdf}>
            <Publish
              className={classNames(classes.leftIcon, classes.iconPdf)}
            />
            DOWNLOAD PDF
          </Button>
        </CardActions>
        <CardContent />
      </Paper>
    );
  }
}

ProfileWidget.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileWidget);
