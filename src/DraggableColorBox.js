import React from "react";
import { withStyles } from "@material-ui/core/styles";

const Styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
  },
};

function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.color} - {props.name}
    </div>
  );
}

export default withStyles(Styles)(DraggableColorBox);
