import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/core/styles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(format) {
    this.setState({ format });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const { classes } = this.props;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        more={true}
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
      />
    ));
    return (
      <div className={classes.Palette}>
        {/* Navbar goes here */}
        <Navbar
          changer={true}
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className={classes.PaletteColor}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
