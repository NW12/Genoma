import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Footer from "./components/layout/footer/Footer";
import GenomaP1 from "./components/genomaP1/GenomaP1";
import GenomaProcessP2 from "./components/genomaProcessP2/GenomaProcessP2";
import GenomaPersonalTestP7 from "./components/genomaPersonalTestP7/GenomaPersonalTestP7";
import PersonalTestStarted from "./components/personalTestStarted/PersonalTestStarted";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#e84a78" }, // Pink color
    secondary: { main: "#999999" } // Grey color
  },
  typography: {
    useNextVariants: "true"
  },
  overrides: {
    MuiTabs: {
      scrollable: {
        overflowY: "hidden"
      }
    },
    MuiTab: {
      root: {
        position: "relative",
        overflow: "visible"
      }
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Navbar />

            <Route exact path="/" component={GenomaP1} />
            <Route exact path="/GenomaProcessP2" component={GenomaProcessP2} />
            <Route
              exact
              path="/genomaPersonalTestP7"
              component={GenomaPersonalTestP7}
            />
            <Route
              exact
              path="/personalteststarted"
              component={PersonalTestStarted}
            />
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
