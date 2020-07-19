import iro from "@jaames/iro";
const setColor = (color) =>
  document
    .getElementById("root")
    .setAttribute("style", `background-color: ${color}`);
const colorPicker = new iro.ColorPicker("#picker", {
  width: 320,
  color: "#f00",
});
colorPicker.on("color:change", function (color) {
  beforeColor = color.hexString;
  setColor(color.hexString);
});
const flashButton = document.getElementById("flash");
let beforeColor = "";
let t = null;
let is_flash_on = true;
let is_black_on = false;
flashButton.onclick = () => {
  if (t !== null) {
    clearTimeout(t);
    t = null;
    return;
  }
  is_flash_on = true;
  t = setInterval(() => {
    if (is_black_on) {
      return;
    }
    if (is_flash_on) {
      setColor(beforeColor);
      is_flash_on = !is_flash_on;
      return;
    }
    setColor("#000");
    is_flash_on = !is_flash_on;
  }, 100);
};
const blackButton = document.getElementById("black");
blackButton.onclick = () => {
  if (is_black_on) {
    is_black_on = false;
    setColor(beforeColor);
    return;
  }
  is_black_on = true;
  setColor("#000");
};
