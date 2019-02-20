import React from "react";
import Banner from "./banner/Banner";
import NavbarCandidate from "../layout/navbarcandidate/NavbarCandidate";
import FooterCandidate from "../layout/footercandidate/FooterCandidate.js";
import Progress from "./progress/Progress";
import CandidatePathContent from "./candidatepathcontent/CandidatePathContent";

const GenomaProcessP2 = () => {
	return (
		<React.Fragment>
			<NavbarCandidate />
			<Banner />
			<Progress />
			<CandidatePathContent />
			<FooterCandidate />
		</React.Fragment>
	);
};

export default GenomaProcessP2;
