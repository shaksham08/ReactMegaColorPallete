import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";
import "./ColorBox.css";
import { purple } from "@material-ui/core/colors";

const styles = {
  copyText: {
    color: purple,
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState(
      {
        copied: true,
      },
      () => {
        setTimeout(() => {
          this.setState({ copied: false });
        }, 1500);
      }
    );
  }
  render() {
    const { background, classes } = this.props;
    const isdarkColor = chroma(background).luminance() <= 0.08;
    console.log(isdarkColor);
    const islightColor = chroma(background).luminance() >= 0.5;
    return (
      <CopyToClipboard
        text={this.props.background}
        onCopy={this.changeCopyState}
      >
        <div className="ColorBox" style={{ background: this.props.background }}>
          <div
            className={`copy-overlay ${this.state.copied && "show"}`}
            style={{ background: this.props.background }}
          />
          <div className={`copy-message ${this.state.copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="boxContent">
              <span className={isdarkColor ? "light-text" : ""}>
                {this.props.name}
              </span>
            </div>
            <button className={`copy-button ${islightColor && "Dark-text"}`}>
              Copy
            </button>
          </div>
          {!this.props.more ? (
            ""
          ) : (
            <Link
              to={`/palette/${this.props.paletteId}/${this.props.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={`see-more ${islightColor && "Dark-text"}`}>
                More
              </button>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
