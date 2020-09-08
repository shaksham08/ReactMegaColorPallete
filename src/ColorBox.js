import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/core/styles";

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
            className={`${classes.colorOverlay} ${
              this.state.copied && classes.showOverlay
            }`}
            style={{ background: this.props.background }}
          />
          <div
            className={`${classes.copyMessage} ${
              this.state.copied && classes.copyShow
            }`}
          >
            <h1>Copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
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
