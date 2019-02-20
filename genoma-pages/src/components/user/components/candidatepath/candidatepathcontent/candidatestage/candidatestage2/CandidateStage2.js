import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import SingleGame from "./singlegame/SingleGame";
import CareBallonGame from "../../../../../../../assets/images/careballongamecandi.png";
import DiceGame from "../../../../../../../assets/images/dicegamecandi.png";
import IowaGame from "../../../../../../../assets/images/iowagamecandi.png";
import CareTowerGame from "../../../../../../../assets/images/caretowergamecandi.png";
import StrpGame from "../../../../../../../assets/images/strpgamecandi.png";
import TnumGame from "../../../../../../../assets/images/tnumgamecandi.png";
import SmallHeart from "../../../../../../../assets/images/smallestheart2.png";
import BlackSmallHeart from "../../../../../../../assets/images/blacksmallestheart2.png";

const styles = theme => ({
	candidateStage2: {
		paddingTop: 14,
		paddingBottom: 18,
		textAlign: "center"
	},
	title: {
		border: "1px solid #999999",
		borderRadius: 4,
		backgroundColor: "#898989",
		textAlign: "center",
		paddingTop: 13,
		paddingBottom: 13,
		width: 240,
		margin: "0 auto 27px"
	},

	titleBody1: {
		color: "#fff"
	},
	padTopBot: {
		paddingTop: 8,
		paddingBottom: 8,
		"&:first-child": {
			paddingTop: 0
		},
		"&:last-child": {
			paddingBottom: 0
		}
	},
	smallHeart: {
		display: "none"
	}
});

const CandidateStage2 = props => {
	const { classes } = props;
	return (
		<div className={classes.candidateStage2}>
			<div className={classes.title}>
				<Typography
					variant="body1"
					classes={{ body1: classes.titleBody1 }}
				>
					Incompleted
				</Typography>
			</div>
			<Grid container>
				<Grid container justify="center" className={classes.padTopBot}>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={CareBallonGame}
							alt="Care Callon Game"
							label="Care"
							addGame={true}
							HeartShape={SmallHeart}
						/>
					</Grid>
				</Grid>
				<Grid container justify="center" className={classes.padTopBot}>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={DiceGame}
							alt="Dice Game"
							label="Dice"
							addGame={true}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={IowaGame}
							alt="Iowa Game"
							label="Iowa"
							addGame={false}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={CareTowerGame}
							alt="Care Tower Game"
							label="Care"
							addGame={true}
							HeartShape={SmallHeart}
						/>
					</Grid>
				</Grid>
				<Grid container justify="center" className={classes.padTopBot}>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={StrpGame}
							alt="Strp Game"
							label="Strp"
							addGame={false}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={TnumGame}
							alt="Tnum Game"
							label="Tnum"
							addGame={true}
							HeartShape={BlackSmallHeart}
						/>
					</Grid>
				</Grid>
				<Grid container justify="center" className={classes.padTopBot}>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={IowaGame}
							alt="Iowa Game"
							label="Iowa"
							addGame={false}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={CareTowerGame}
							alt="CareTowerGame"
							label="Care"
							addGame={true}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
				</Grid>
				<Grid container justify="center" className={classes.padTopBot}>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={DiceGame}
							alt="Dice Game"
							label="Dice"
							addGame={true}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={IowaGame}
							alt="Iowa Game"
							label="Iowa"
							addGame={false}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={CareTowerGame}
							alt="Care Tower Game"
							label="Care"
							addGame={true}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
				</Grid>
				<Grid container justify="center" className={classes.padTopBot}>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={StrpGame}
							alt="Strp Game"
							label="Strp"
							addGame={false}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={TnumGame}
							alt="Tnum Game"
							label="Tnum"
							addGame={true}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
				</Grid>
				<Grid container justify="center" className={classes.padTopBot}>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={IowaGame}
							alt="Iowa Game"
							label="Iowa"
							addGame={false}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
					<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
						<SingleGame
							src={CareTowerGame}
							alt="CareTowerGame"
							label="Care"
							addGame={true}
							smallHeart={{ display: "none" }}
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

CandidateStage2.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CandidateStage2);
