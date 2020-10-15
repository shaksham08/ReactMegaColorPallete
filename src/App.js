import React, { useState } from "react";
import Palette from "./Palette";
import SeedColor from "./SeedColor";
import PalleteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";
import SingleColorPalette from "./SingleColorPalette";
import { Switch, Route } from "react-router-dom";
import { generatePalette } from "./colorHelper";

function App() {
  const [palette, setpalette] = useState([...SeedColor]);

  function addColor(newpalette) {
    setpalette([...palette, newpalette]);
    console.log(newpalette);
  }
  function getSeedColor(id) {
    return palette.find((el) => el.id === id);
  }
  return (
    <Switch>
      <Route
        exact
        path="/palette/new/"
        render={(routerprops) => (
          <NewPaletteForm
            addColor={addColor}
            palette={palette}
            {...routerprops}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PalleteList palettes={palette} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routerprops) => (
          <Palette
            palette={generatePalette(getSeedColor(routerprops.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routerprops) => (
          <SingleColorPalette
            colorId={routerprops.match.params.colorId}
            palette={generatePalette(
              getSeedColor(routerprops.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
