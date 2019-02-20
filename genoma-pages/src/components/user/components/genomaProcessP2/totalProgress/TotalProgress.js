import React from "react";
import Progress from "./progress/Progress";
import TabsMenu from "./tabMenu/TabsMenu";

const style = {
  paddingTop: 89,
  paddingBottom: 104
};

const TotalProgress = () => {
  return (
    <div style={style}>
      <Progress />
      <TabsMenu />
    </div>
  );
};

export default TotalProgress;
