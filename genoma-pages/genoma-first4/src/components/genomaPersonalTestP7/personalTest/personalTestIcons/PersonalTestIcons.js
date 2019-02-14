import React from "react";
import PersonalTestSingleIcon from "./personalTestSingleIcon/PersonalTestSingleIcon";
import clockImage from "../../../../assets/images/clockImage.png";
import honestyImage from "../../../../assets/images/honestyImage.png";
import answerImage from "../../../../assets/images/answerImage.png";

import { Grid } from "@material-ui/core";

const PersonalTestIcons = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={6} sm={4}>
        <PersonalTestSingleIcon
          personalTestImgUsed={clockImage}
          personalTestIconDesc="Take less than 
              12minutes"
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <PersonalTestSingleIcon
          personalTestImgUsed={honestyImage}
          personalTestIconDesc="Answer honestly, If
              you don’t like the answer"
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <PersonalTestSingleIcon
          personalTestImgUsed={answerImage}
          personalTestIconDesc="Try, Not to leave
              any neutral answer."
        />
      </Grid>
    </Grid>
  );
};

export default PersonalTestIcons;
