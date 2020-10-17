import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, deleteBox }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((el, i) => (
        <DraggableColorBox
          delete={deleteBox}
          color={el.color}
          name={el.name}
          key={el.name}
          index={i}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
