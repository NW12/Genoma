import React from "react";
import PropTypes from "prop-types";
import SingleTab from "../../../genomaProcessP2/totalProgress/tabMenu/singleTab/SingleTab";
import PersonalTest from "../PersonalTest";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Tab, Tabs } from "@material-ui/core";
import {
  GroupOutlined,
  CardTravelOutlined,
  DonutSmallOutlined,
  ContactSupportOutlined,
  GraphicEqOutlined,
  SentimentVerySatisfied,
  Lock
} from "@material-ui/icons";

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
  iconFontSize: {
    fontSize: 36
  },
  scrollButtons: {
    color: "#ffffff"
  },
  tabsIndicator: {
    display: "none"
  },
  tabRoot: {
    textTransform: "initial",
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 17,
    "&:hover": {
      backgroundColor: "pink",
      color: "#e84a78",
      opacity: 0.5
    },
    "&$tabSelected": {
      color: "#ffffff",
      backgroundColor: "#999999",
      "&:after": {
        zIndex: -1,
        content: "",
        display: "inline-block",
        height: "20px",
        width: "20px",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "-7px",
        margin: "0 auto",
        background: "#FA8072",
        transform: "rotate(-135deg)"
      }
    },
    "&:focus": {
      color: "#ffffff"
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 2
  },
  labelContainer: {
    width: "80%",
    paddingBottom: 5
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15
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
    },
    container: {
      maxWidth: 594
    }
  },
  "@media (min-width: 960px)": {
    tabRoot: {
      width: 200,
      height: 200
    },
    container: {
      maxWidth: 938
    }
  },
  "@media (min-width: 1280px)": {
    tabRoot: {
      width: 175,
      height: 190
    },
    container: {
      maxWidth: 1170
    }
  },
  "@media (min-width: 1920px)": {
    tabRoot: {
      width: 175,
      height: 190
    },
    container: {
      maxWidth: 1872
    }
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 1
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
      <Grid container justify="center">
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
                label="Excperience the job!"
                icon={
                  <SingleTab
                    iconUsed={
                      <CardTravelOutlined className={classes.iconFontSize} />
                    }
                    styleLockIcon={{ display: "none" }}
                    progressValue={-30}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
              <Tab
                label="Personal Information"
                icon={
                  <SingleTab
                    iconUsed={
                      <GroupOutlined className={classes.iconFontSize} />
                    }
                    styleLockIcon={{ display: "none" }}
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
                    lockIcon={
                      <Lock style={{ fontSize: "12px", color: "#ffffff" }} />
                    }
                    progressValue={0}
                    backgroundColorUsed="#999999"
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
                    lockIcon={
                      <Lock style={{ fontSize: "12px", color: "#ffffff" }} />
                    }
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
                    styleLockIcon={{ display: "none" }}
                    progressValue={0}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
              <Tab
                label="Complete tests"
                icon={
                  <SingleTab
                    iconUsed={
                      <SentimentVerySatisfied
                        className={classes.iconFontSize}
                      />
                    }
                    styleLockIcon={{ display: "none" }}
                    progressValue={100}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
              <Tab
                label="Item Seven"
                icon={
                  <SingleTab
                    iconUsed={
                      <GroupOutlined className={classes.iconFontSize} />
                    }
                    styleLockIcon={{ display: "none" }}
                    progressValue={20}
                    backgroundColorUsed="#ffffff"
                  />
                }
                classes={tabStyling}
              />
            </Tabs>
          </Grid>
        </Grid>
        {value === 0 && (
          <TabContainer>
            {" "}
            <PersonalTest />{" "}
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            {" "}
            <PersonalTest />{" "}
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <PersonalTest />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <PersonalTest />
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <PersonalTest />
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <PersonalTest />
          </TabContainer>
        )}
        {value === 6 && (
          <TabContainer>
            <PersonalTest />
          </TabContainer>
        )}
      </Grid>
      // <div className={classes.root}>

      // </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
