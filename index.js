import iro from "@jaames/iro";
const colorPicker = new iro.ColorPicker("#picker", {
  width: 320,
  color: "#f00",
});
colorPicker.on("color:change", function (color) {
  console.log("hgoe");
  document
    .getElementById("root")
    .setAttribute("style", `background-color: ${color.hexString}`);
});
