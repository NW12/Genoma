import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia
} from "@material-ui/core";

const styles = {
  card: {
    textAlign: "center",
    paddingTop: 15
  },
  media: {
    width: 80,
    height: 81,
    margin: "0 auto"
  },
  titleCard: {
    fontWeight: 500
  },
  cardContentRoot: {
    padding: 8
  },
  cardDetail: {
    lineHeight: 1.0
  },
  btn: {
    fontSize: 14,
    fontWeight: "300",
    color: "#ffffff",
    margin: "0 auto"
  },
  addBtn: {
    backgroundColor: "#4caf50",
    "&:hover": {
      backgroundColor: "#4caf50"
    }
  },
  offBtn: {
    backgroundColor: "#5f5f5f",
    "&:hover": {
      backgroundColor: "#5f5f5f"
    }
  },
  outerCircle: {
    position: "relative",
    width: 80,
    height: 81,
    borderRadius: "100%",
    margin: "0 auto"
  },
  smallDot: {
    position: "absolute",
    content: "",
    width: 12,
    height: 12,
    top: "17px",
    right: "-3px",
    borderRadius: "100%"
  },
  smallDotGreen: {
    backgroundColor: "#4caf50"
  },
  smallDotGray: {
    backgroundColor: "#5f5f5f"
  },
  sizeSmall: {
    minHeight: 28,
    paddingLeft: 27,
    paddingRight: 27
  }
};

class SingleCognitiveGame extends Component {
  state = {
    active: false
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <div className={classes.outerCircle}>
            <CardMedia
              component="img"
              alt={this.props.altImg}
              image={this.props.img}
              title={this.props.titleImg}
              classes={{ root: classes.media }}
            />
            <div
              className={classNames(
                classes.smallDot,
                this.props.addGame
                  ? classes.smallDotGreen
                  : classes.smallDotGray
              )}
            />
          </div>

          <CardContent classes={{ root: classes.cardContentRoot }}>
            <Typography variant="body1" className={classes.titleCard}>
              {this.props.titleCard}
            </Typography>
            <Typography component="p" className={classes.cardDetail}>
              {this.props.addGame ? (
                <span>Add Game</span>
              ) : (
                <span>Take Out</span>
              )}
            </Typography>
            <Typography component="p" className={classes.cardDetail}>
              2 mints
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            className={classNames(
              classes.btn,
              this.props.addGame ? classes.addBtn : classes.offBtn
            )}
            classes={{ sizeSmall: classes.sizeSmall }}
          >
            {this.props.addGame ? <span>ADD</span> : <span>OFF</span>}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

SingleCognitiveGame.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SingleCognitiveGame);
