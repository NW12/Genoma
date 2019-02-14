import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";

const ListItemLink = props => {
  return (
    <ListItem
      component={Link}
      {...props}
      classes={{ root: props.listitemflexend }}
    />
  );
};

export default ListItemLink;
