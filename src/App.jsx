import ColorPicker from "./ColorPicker";
import style from "./ColorPicker.module.css";
function App() {
  return (
    <>
      <h1>Pick and Match Colors</h1>
      <div className={style.multicolorscontainer}>
        <div className="coloursmatchescontainer"></div>
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
      </div>
    </>
  );
}

export default App;
