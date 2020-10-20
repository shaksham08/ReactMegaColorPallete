import React, { useEffect, Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function ColorPickerForm(props) {
  const { maxColor, colors, addnewColor } = props;
  const [currColor, setcurrColor] = React.useState("teal");
  const [newName, setNewName] = React.useState("");
  const handleChange = (evt) => {
    setNewName(evt.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colors.every(({ color }) => color !== currColor);
    });
  });

  const updateColor = (newcolor) => {
    setcurrColor(newcolor.hex);
  };
  return (
    <div>
      <ChromePicker color={currColor} onChangeComplete={updateColor} />
      <ValidatorForm onSubmit={() => addnewColor(currColor, newName)}>
        <TextValidator
          value={newName}
          onChange={handleChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "this field is required",
            "Name already Exist",
            "the color already exist",
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: currColor }}
          type="submit"
          disabled={colors.length >= maxColor}
        >
          Add Color
        </Button>
      </ValidatorForm>
    </div>
  );
}
