import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export default class ColorBox extends Component {
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
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="boxContent">
              <span>{this.props.name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <button className="see-more">More</button>
        </div>
      </CopyToClipboard>
    );
  }
}
