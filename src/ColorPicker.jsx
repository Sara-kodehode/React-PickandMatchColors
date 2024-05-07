import { useState } from "react";
import style from "./ColorPicker.module.css";

export default function ColorPicker() {
  function handleColorChange(e) {
    setColor(e.target.value);
  }
  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  const [color, setColor] = useState(randomColor());
  return (
    <>
      <div className={style.colorDisplay} style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
        <label>
          <input
            className={style.inputColor}
            type="color"
            title="select color"
            value={color}
            onChange={handleColorChange}
          />
        </label>
      </div>
    </>
  );
}
