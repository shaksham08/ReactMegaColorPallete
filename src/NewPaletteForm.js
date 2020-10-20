import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import arrayMove from "array-move";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NewPaletteForm({
  palette,
  addColor,
  history,
  maxColor = 20,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [colors, setColors] = React.useState(palette[0].colors);

  const addRandomColor = () => {
    const allcolors = palette.map((el) => el.colors).flat();
    let randColor = allcolors[Math.floor(Math.random() * allcolors.length)];
    setColors([...colors, randColor]);
  };

  const clearColor = () => {
    setColors([]);
  };

  const deleteBox = (name) => {
    let newColor = colors.filter((el) => el.name !== name);
    setColors(newColor);
  };

  const addnewColor = (currColor, newName) => {
    const newColor = {
      color: currColor,
      name: newName,
    };
    setColors([...colors, newColor]);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCreate = (newPaletteName) => {
    const newpalette = {
      paletteName: newPaletteName,
      id: newPaletteName.replace(/ /g, "-"),
      emoji: "🎨",
      colors: colors,
    };
    console.log(newpalette);
    addColor(newpalette);
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        classes={classes}
        palette={palette}
        handleCreate={handleCreate}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColor}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={colors.length >= maxColor}
          >
            Random Color
          </Button>
        </div>
        <ColorPickerForm
          maxColor={maxColor}
          colors={colors}
          addnewColor={addnewColor}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          delete={deleteBox}
          colors={colors}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
