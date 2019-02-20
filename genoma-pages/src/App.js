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
import JobListingNewDesign from "./components/joblistingnewdesign/JobListingNewDesign";

import CandidatePath from "./components/user/components/candidatepath/CandidatePath";
import GenomaP1 from "./components/user/components/genomaP1/GenomaP1";
import GenomaProcessP2 from "./components/user/components/genomaProcessP2/GenomaProcessP2";
import GenomaPersonalTestP7 from "./components/user/components/genomaPersonalTestP7/GenomaPersonalTestP7";
import PersonalTestStarted from "./components/user/components/personalTestStarted/PersonalTestStarted";

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
							<Route
								exact
								path="/admin"
								component={JobsListing}
							/>
							<Route
								exact
								path="/candidates"
								component={JobPositions}
							/>
							<Route exact path="/report" component={Reports} />
							<Route
								exact
								path="/profile"
								component={ProfileP5}
							/>
							<Route exact path="/setting" component={Setting} />
							<Route
								exact
								path="/joblistinggroup2"
								component={JobListingGroup2}
							/>
							<Route
								exact
								path="/joblistingnewdesign"
								component={JobListingNewDesign}
							/>
							<Route
								exact
								path="/candipathcandiview"
								component={CandidatePath}
							/>
							<Route
								exact
								path="/genomap1"
								component={GenomaP1}
							/>
							<Route
								exact
								path="/GenomaProcessP2"
								component={GenomaProcessP2}
							/>
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
							<Route component={Error} />
						</Switch>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

export default App;
