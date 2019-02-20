import React from "react";
import Bannerp1 from "./banner/Bannerp1";
import Intro from "./intro/Intro";
import Processes from "./processes/Processes";
import NavbarCandidate from "../layout/navbarcandidate/NavbarCandidate";
import FooterCandidate from "../layout/footercandidate/FooterCandidate.js";

const GenomaP1 = () => {
	return (
		<div>
			<NavbarCandidate />
			<Bannerp1 />
			<Intro />
			<Processes />
			<FooterCandidate />
		</div>
	);
};

export default GenomaP1;
