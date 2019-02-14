import React, { Component } from "react";
import "./App.css";
import Login from "./components/authentication/login/Login";
import Home from "./components/home/Home";
import JobsListing from "./components/jobslisting/JobsListing";
import JobPositions from "./components/jobpositions/JobPositions";
import Reports from "./components/reports/Reports";
import ProfileP5 from "./components/profilep5/ProfileP5";
import Setting from "./components/setting/Setting";
import JobListingGroup2 from "./components/joblistinggroup2/JobListingGroup2";
import Error from "./components/nocomponentfound/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  toolbar: {
    height: 190
  },
  palette: {
    primary: { main: "#ff008a" }, // Pink color
    secondary: { main: "#999999" } // Grey color
  },
  typography: {
    useNextVariants: "true"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/admin" component={JobsListing} />
              <Route exact path="/candidates" component={JobPositions} />
              <Route exact path="/report" component={Reports} />
              <Route exact path="/profile" component={ProfileP5} />
              <Route exact path="/setting" component={Setting} />
              <Route
                exact
                path="/joblistinggroup2"
                component={JobListingGroup2}
              />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
