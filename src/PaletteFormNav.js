import React, { useEffect, Component } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function PaletteFormNav(props) {
  const { classes, open, palette, handleCreate, handleDrawerOpen } = props;
  const [newPaletteName, setNewPaletteName] = React.useState("");
  const handlePaletteName = (evt) => {
    setNewPaletteName(evt.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palette.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });
  return (
    <div>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
          <div className={classes.navBtns}>
            <ValidatorForm
              onSubmit={() => handleCreate(newPaletteName)}
              style={{ display: "flex" }}
            >
              <TextValidator
                label="Palette Name"
                onChange={handlePaletteName}
                name="newpaletteName"
                value={newPaletteName}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["this field is required", "Name already Exist"]}
              />
              <Button variant="contained" color="secondary" type="submit">
                Create Palette
              </Button>
            </ValidatorForm>
          </div>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
