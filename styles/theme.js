import { data } from "pages/api/flowers/cosmos";
const cosmos = data.flowers.map((flower) => ({ [flower.name]: flower.hex }));

export default {
  space: [0, 4, 8, 16, 32, 64],
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
    cosmos,
  },
};
