import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";
import SingleCognitiveAbility from "../singlecognitiveability/SingleCognitiveAbility";

const styles = {
  CognitiveAbilityTitle: {
    paddingTop: 10,
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center"
  }
};

const UniqueCognitiveAbility = props => {
  const { classes } = props;
  return (
    <div>
      <SingleCognitiveAbility
        iconUsed={props.cognitiveIcon}
        colorClassName={props.className}
      />
      <Typography
        variant="h3"
        classes={{
          h3: classes.CognitiveAbilityTitle
        }}
      >
        {props.CognitiveAbilityTitle}
      </Typography>
    </div>
  );
};

UniqueCognitiveAbility.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UniqueCognitiveAbility);
