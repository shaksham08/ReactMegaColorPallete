import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";
import "./ColorBox.css";

//Defining the styles for this component
const styles = {
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "black" : "white",
  },
  lightText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "black" : "white",
  },
  seeMore: {
    position: "absolute",
    height: "30px",
    width: "60px",
    bottom: "0",
    fontSize: "0.9rem",
    right: "0%",
    marginLeft: "-50px",
    marginTop: "-15px",
    border: "none",
    background: "rgba(255, 255, 255, 0.3)",
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "black" : "white",
    boxShadow: "none",
    letterSpacing: "1px",
    textTransform: "uppercase",
    outline: "none",
    lineHeight: "30px",
    cursor: "pointer",
    textAlign: "center",
  },
  copyButton: {
    position: "absolute",
    height: "30px",
    width: "100px",
    top: "50%",
    fontSize: "1rem",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    border: "none",
    background: "rgba(255, 255, 255, 0.3)",
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "black" : "white",
    boxShadow: "none",
    opacity: "0",
    textTransform: "uppercase",
    outline: "none",
    lineHeight: "30px",
    cursor: "pointer",
    textDecoration: "none",
  },
  ColorBox: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    outline: "none",
    "&:hover": {
      "& $copyButton": {
        opacity: "1",
      },
    },
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
    const { classes } = this.props;

    return (
      <CopyToClipboard
        text={this.props.background}
        onCopy={this.changeCopyState}
      >
        <div
          className={classes.ColorBox}
          style={{ background: this.props.background }}
        >
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
              <span className={classes.lightText}>{this.props.name}</span>
            </div>
            <button className={`${classes.copyButton} ${classes.lightText}`}>
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
              <button className={`${classes.seeMore}`}>More</button>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
