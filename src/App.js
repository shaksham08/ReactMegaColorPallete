import React from "react";
import Palette from "./Palette";
import SeedColor from "./SeedColor";
import PalleteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import { Switch, Route } from "react-router-dom";
import { generatePalette } from "./colorHelper";

function App() {
  function getSeedColor(id) {
    return SeedColor.find((el) => el.id === id);
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PalleteList palettes={SeedColor} {...routeProps} />
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
