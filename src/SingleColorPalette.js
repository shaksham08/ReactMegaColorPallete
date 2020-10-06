import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import { Link } from "react-router-dom";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/SingleColorPaletteStyle";
import { withStyles } from "@material-ui/core/styles";
const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shades: this.gatherShades(this.props.palette),
      format: "hex",
    };
    this.gatherShades = this.gatherShades.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(format) {
    this.setState({ format });
  }
  gatherShades(palette) {
    const { colors } = palette;
    const result = [];
    for (let level of levels) {
      for (let color of colors[level]) {
        if (color.id === this.props.colorId) {
          result.push(color);
        }
      }
    }
    return result;
  }

  render() {
    const { shades, format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = shades.map((color) => (
      <ColorBox
        more={false}
        background={color[format]}
        name={color.name}
        key={color[format]}
        id={color[format]}
        paletteId={color.id}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar changer={false} changeFormat={this.changeFormat} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
