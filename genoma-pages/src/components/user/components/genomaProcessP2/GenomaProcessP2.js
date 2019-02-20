import React from "react";
import Banner from "./banner/Banner";
import TotalProgress from "./totalProgress/TotalProgress";
import NavbarCandidate from "../layout/navbarcandidate/NavbarCandidate";
import FooterCandidate from "../layout/footercandidate/FooterCandidate.js";

const GenomaProcessP2 = () => {
	return (
		<React.Fragment>
			<NavbarCandidate />
			<Banner />
			<TotalProgress />
			<FooterCandidate />
		</React.Fragment>
	);
};

export default GenomaProcessP2;
