import React, { Component } from "react";
import Slider from "rc-slider";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "rc-slider/assets/index.css";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles/NavbarStyles";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event, reason) {
    this.setState({
      open: false,
    });
  }
  handlechange(e) {
    //! Note that state change always take some time so either use a callback or
    this.setState({
      format: e.target.value,
      open: true,
    });

    this.props.changeFormat(e.target.value);
  }
  render() {
    const { level, changeLevel, classes } = this.props;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {!this.props.changer ? (
          ""
        ) : (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={this.state.format} onChange={this.handlechange}>
            <MenuItem value="hex">HEX - #ffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format changed to {this.state.format.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.handleClose}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </header>
    );
  }
}
export default withStyles(styles)(Navbar);
