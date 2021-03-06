import React from "react";
import Banner from "../genomaProcessP2/banner/Banner";
import TotalProgress from "./totalProgress/TotalProgress";
import NavbarCandidate from "../layout/navbarcandidate/NavbarCandidate";
import FooterCandidate from "../layout/footercandidate/FooterCandidate.js";

const GenomaPersonalTestP7 = () => {
	return (
		<React.Fragment>
			<NavbarCandidate />
			<Banner />
			<TotalProgress />
			<FooterCandidate />
		</React.Fragment>
	);
};

export default GenomaPersonalTestP7;
