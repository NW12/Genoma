import React from "react";
import Banner from "../genomaProcessP2/banner/Banner";
import TotalProgress from "./totalProgress/TotalProgress";
import NavbarCandidate from "../layout/navbarcandidate/NavbarCandidate";
import FooterCandidate from "../layout/footercandidate/FooterCandidate.js";

const PersonalTestStarted = () => {
	return (
		<React.Fragment>
			<NavbarCandidate />
			<Banner />
			<TotalProgress />
			<FooterCandidate />
		</React.Fragment>
	);
};

export default PersonalTestStarted;
