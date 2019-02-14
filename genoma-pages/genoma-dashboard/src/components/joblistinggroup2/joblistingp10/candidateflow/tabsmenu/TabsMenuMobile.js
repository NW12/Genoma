import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Typography, Grid } from "@material-ui/core";
import {
  GroupOutlined,
  CardTravelOutlined,
  DonutSmallOutlined,
  ContactSupportOutlined,
  GraphicEqOutlined,
  Add
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
  root: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  tabRoot: {
    border: "1px solid #b8a6a6",
    minWidth: 40,
    "&:hover": {
      border: "1px solid #ff008a"
    },
    "&$tabSelected": {
      border: "1px solid #ff008a"
    },
    "&:focus": {
      border: "1px solid #ff008a"
    },
    "&:first-child": {
      borderLeft: "none",
      borderBottom: "none"
    },
    "&:last-child": {
      borderRight: "none",
      borderTop: "none"
    }
  },
  tabSelected: {},
  tabsIndicator: {
    display: "none"
  }
});

class TabsMenuMobile extends React.Component {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator
            }}
          >
            <Tab
              icon={<GroupOutlined />}
              classes={{
                root: classes.tabRoot
              }}
            />

            <Tab
              icon={<CardTravelOutlined />}
              classes={{
                root: classes.tabRoot
              }}
            />

            <Tab
              icon={<DonutSmallOutlined />}
              classes={{
                root: classes.tabRoot
              }}
            />

            <Tab
              icon={<ContactSupportOutlined />}
              classes={{
                root: classes.tabRoot
              }}
            />

            <Tab
              icon={<GraphicEqOutlined />}
              classes={{
                root: classes.tabRoot
              }}
            />

            <Tab
              icon={<Add />}
              classes={{
                root: classes.tabRoot
              }}
            />
          </Tabs>
        </Grid>
        {value === 0 && <TabContainer> tab 1</TabContainer>}
        {value === 1 && <TabContainer> tab 2 </TabContainer>}
        {value === 2 && (
          <TabContainer>
            <CultureFit />
            {/* tab 3 */}
          </TabContainer>
        )}
        {value === 3 && <TabContainer>tab 4</TabContainer>}
        {value === 4 && <TabContainer>tab 5</TabContainer>}
        {value === 5 && <TabContainer>tab 6</TabContainer>}
      </Grid>
    );
  }
}

TabsMenuMobile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabsMenuMobile);
