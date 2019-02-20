import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import SingleGame from "./singlegame/SingleGame";
import CareBallonGame from "../../../../../../../assets/images/careballongame.png";
import DiceGame from "../../../../../../../assets/images/dicegame.png";
import IowaGame from "../../../../../../../assets/images/iowagame.png";
import CareTowerGame from "../../../../../../../assets/images/caretowergame.png";
import StrpGame from "../../../../../../../assets/images/strpgame.png";
import TnumGame from "../../../../../../../assets/images/tnumgame.png";

const styles = theme => ({
	jobStage2: {
		paddingTop: 14,
		paddingBottom: 18,
		textAlign: "center"
	},
	title: {
		border: "1px solid #999999",
		borderRadius: 4,
		backgroundColor: "#f6f6f6",
		textAlign: "center",
		paddingTop: 11,
		paddingBottom: 11,
		marginBottom: 27
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
	}
});

const JobStage2 = props => {
	const { classes } = props;
	return (
		<div className={classes.jobStage2}>
			<div className={classes.title}>
				<Typography variant="body1">Stage2: Game Bag</Typography>
			</div>
			<Grid container>
				<Grid container className={classes.padTopBot}>
					<Grid item xs={12}>
						<SingleGame
							src={CareBallonGame}
							alt="Care Callon Game"
							label="Care"
							addGame={true}
						/>
					</Grid>
				</Grid>
				<Grid container className={classes.padTopBot}>
					<Grid item xs={4}>
						<SingleGame
							src={DiceGame}
							alt="Dice Game"
							label="Dice"
							addGame={true}
						/>
					</Grid>
					<Grid item xs={4}>
						<SingleGame
							src={IowaGame}
							alt="Iowa Game"
							label="Iowa"
							addGame={false}
						/>
					</Grid>
					<Grid item xs={4}>
						<SingleGame
							src={CareTowerGame}
							alt="Care Tower Game"
							label="Care"
							addGame={true}
						/>
					</Grid>
				</Grid>
				<Grid container className={classes.padTopBot}>
					<Grid item xs={6}>
						<SingleGame
							src={StrpGame}
							alt="Strp Game"
							label="Strp"
							addGame={false}
						/>
					</Grid>
					<Grid item xs={6}>
						<SingleGame
							src={TnumGame}
							alt="Tnum Game"
							label="Tnum"
							addGame={true}
						/>
					</Grid>
				</Grid>
				<Grid container className={classes.padTopBot}>
					<Grid item xs={6}>
						<SingleGame
							src={IowaGame}
							alt="Iowa Game"
							label="Iowa"
							addGame={false}
						/>
					</Grid>
					<Grid item xs={6}>
						<SingleGame
							src={CareTowerGame}
							alt="CareTowerGame"
							label="Care"
							addGame={true}
						/>
					</Grid>
				</Grid>
				<Grid container className={classes.padTopBot}>
					<Grid item xs={4}>
						<SingleGame
							src={DiceGame}
							alt="Dice Game"
							label="Dice"
							addGame={true}
						/>
					</Grid>
					<Grid item xs={4}>
						<SingleGame
							src={IowaGame}
							alt="Iowa Game"
							label="Iowa"
							addGame={false}
						/>
					</Grid>
					<Grid item xs={4}>
						<SingleGame
							src={CareTowerGame}
							alt="Care Tower Game"
							label="Care"
							addGame={true}
						/>
					</Grid>
				</Grid>
				<Grid container className={classes.padTopBot}>
					<Grid item xs={6}>
						<SingleGame
							src={StrpGame}
							alt="Strp Game"
							label="Strp"
							addGame={false}
						/>
					</Grid>
					<Grid item xs={6}>
						<SingleGame
							src={TnumGame}
							alt="Tnum Game"
							label="Tnum"
							addGame={true}
						/>
					</Grid>
				</Grid>
				<Grid container className={classes.padTopBot}>
					<Grid item xs={6}>
						<SingleGame
							src={IowaGame}
							alt="Iowa Game"
							label="Iowa"
							addGame={false}
						/>
					</Grid>
					<Grid item xs={6}>
						<SingleGame
							src={CareTowerGame}
							alt="CareTowerGame"
							label="Care"
							addGame={true}
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

JobStage2.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobStage2);
