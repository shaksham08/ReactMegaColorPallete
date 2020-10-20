import React, { useEffect, Component } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import Toolbar from "@material-ui/core/Toolbar";
import DraggableColorList from "./DraggableColorList";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import arrayMove from "array-move";
import { random } from "chroma-js";

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
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={handleCreate} style={{ display: "flex" }}>
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
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
}
