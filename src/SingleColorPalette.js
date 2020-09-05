import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./ColorBox.css";
import "./SingleColorPalette.css";
import { Link } from "react-router-dom";
const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];

export default class SingleColorPalette extends Component {
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
      <div className="Palette single">
        <Navbar changer={false} changeFormat={this.changeFormat} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="ColorBox go-back">
            <Link to={`/palette/${id}`} className="back-button">
              Go Back
            </Link>
          </div>
        </div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="Palette-emoji">{emoji}</span>{" "}
        </footer>
      </div>
    );
  }
}
