import React from "react";
import Palette from "./Palette";
import SeedColor from "./SeedColor";
import { generatePalette } from "./colorHelper";

function App() {
  console.log();
  return (
    <div>
      <Palette palette={generatePalette(SeedColor[4])} />
    </div>
  );
}

export default App;
