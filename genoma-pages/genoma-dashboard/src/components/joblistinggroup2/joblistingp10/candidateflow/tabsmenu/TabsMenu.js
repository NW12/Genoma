import React from "react";
import PropTypes from "prop-types";
import SingleTab from "./singletab/SingleTab";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Tab, Tabs } from "@material-ui/core";
import {
  GroupOutlined,
  CardTravelOutlined,
  DonutSmallOutlined,
  ContactSupportOutlined,
  GraphicEqOutlined,
  Add,
  Delete
} from "@material-ui/icons";
import CultureFit from "../tabsmenucontent/culturefit/CultureFit";

const TabContainer = props => {
  return (
    <Typography component="div" style={{ marginTop: "10px" }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  disPlayNoneXs: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  iconFontSize: {
    fontSize: 38
  },
  scrollButtons: {
    color: "#ffffff"
  },
  tabsIndicator: {
    display: "none"
  },
  backgroundDelete: {
    backgroundColor: "#898989"
  },
  backgroundDeleteCulture: {
    backgroundColor: "#e64e7b"
  },
  tabRoot: {
    textTransform: "initial",
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 17,
    "&:hover": {
      color: "#e84a78",
      opacity: 0.5
    },
    "&$tabSelected": {
      color: "#ffffff",
      backgroundColor: "#999999"
    },
    "&:focus": {
      color: "#ffffff"
    }
  },
  tabSelected: {},
  deleteIconColor: {
    color: "#ffffff"
  },
  typography: {
    padding: theme.spacing.unit * 2
  },
  labelContainer: {
    width: "85%",
    paddingBottom: 5
  },
  container: {
    paddingLeft: 5,
    paddingRight: 5
  },
  "@media (max-width: 600px)": {
    tabRoot: {
      width: 210,
      height: 210
    }
  },
  "@media (min-width: 600px)": {
    tabRoot: {
      width: 225,
      height: 200
    }
  },
  "@media (min-width: 960px)": {
    tabRoot: {
      width: 200,
      height: 200
    }
  },
  "@media (min-width: 1280px)": {
    tabRoot: {
      width: 141,
      height: 141
    }
  },
  "@media (min-width: 1920px)": {
    tabRoot: {
      width: 141,
      height: 141
    }
  }
});

class TabsMenu extends React.Component {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const tabStyling = {
      root: classes.tabRoot,
      selected: classes.tabSelected,
      labelContainer: classes.labelContainer
    };
    return (
      <Grid container justify="center" className={classes.disPlayNoneXs}>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.container}
        >
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="on"
              classes={{
                root: classes.tabsRoot,
                indicator: classes.tabsIndicator,
                scrollButtonsAuto: classes.scrollButtons
              }}
            >
              <Tab
                label="Personal Information"
                icon={
                  <SingleTab
                    iconUsed={
                      <GroupOutlined className={classes.iconFontSize} />
                    }
                    styleDeleteIcon={{ display: "none" }}
                    progressValue={20}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
              <Tab
                label="Games Bag"
                icon={
                  <SingleTab
                    iconUsed={
                      <CardTravelOutlined className={classes.iconFontSize} />
                    }
                    deleteIcon={
                      <Delete style={{ fontSize: "12px", color: "#ffffff" }} />
                    }
                    backgroundDelete={classes.backgroundDelete}
                    progressValue={20}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
              <Tab
                label="Culture-fit assessment"
                icon={
                  <SingleTab
                    iconUsed={
                      <DonutSmallOutlined className={classes.iconFontSize} />
                    }
                    deleteIcon={
                      <Delete style={{ fontSize: "12px", color: "#ffffff" }} />
                    }
                    backgroundDelete={classes.backgroundDeleteCulture}
                    progressValue={0}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
              <Tab
                label="Additional Questions "
                icon={
                  <SingleTab
                    iconUsed={
                      <ContactSupportOutlined
                        className={classes.iconFontSize}
                      />
                    }
                    deleteIcon={
                      <Delete style={{ fontSize: "12px", color: "#ffffff" }} />
                    }
                    backgroundDelete={classes.backgroundDelete}
                    progressValue={0}
                    backgroundColorUsed="#999999"
                  />
                }
                classes={tabStyling}
              />
              <Tab
                label="Language Test"
                icon={
                  <SingleTab
                    iconUsed={
                      <GraphicEqOutlined className={classes.iconFontSize} />
                    }
                    deleteIcon={
                      <Delete style={{ fontSize: "12px", color: "#ffffff" }} />
                    }
                    backgroundDelete={classes.backgroundDelete}
                    progressValue={0}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
              <Tab
                label="Add Section"
                icon={
                  <SingleTab
                    iconUsed={
                      <Add
                        className={classes.iconFontSize}
                        style={{ color: "#e84a78" }}
                      />
                    }
                    styleDeleteIcon={{ display: "none" }}
                    progressValue={100}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
            </Tabs>
          </Grid>
        </Grid>
        {value === 0 && <TabContainer> tab 1</TabContainer>}
        {value === 1 && <TabContainer> tab 2 </TabContainer>}
        {value === 2 && (
          <TabContainer>
            <CultureFit />
          </TabContainer>
        )}
        {value === 3 && <TabContainer>tab 4</TabContainer>}
        {value === 4 && <TabContainer>tab 5</TabContainer>}
        {value === 5 && <TabContainer>tab 6</TabContainer>}
      </Grid>
    );
  }
}

TabsMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabsMenu);
