import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
const Styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0px auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover $delete": { color: "white", transform: "scale(1.5)" },
  },
  boxContent: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    fontSize: "12px",
    padding: "10px",
    outline: "none",
    width: "100%",
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between",
  },
  delete: {
    color: "black",
    transition: "all 0.3s ease-in-out",
  },
};

function DraggableColorBox(props) {
  const { classes } = props;
  const handleDelete = () => {
    props.delete(props.name);
  };
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon
          className={classes.delete}
          onClick={handleDelete}
          value={props.id}
        />
      </div>
    </div>
  );
}

export default withStyles(Styles)(DraggableColorBox);
