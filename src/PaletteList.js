import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alinItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    color: "white",
    justifyContent: "space-between",
  },
  palettes: {
    boxSizing: "border-box",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
  },
};

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.goToPalette = this.goToPalette.bind(this);
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { classes, palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette {...palette} handleClick={this.goToPalette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
