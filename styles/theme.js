import { data } from "pages/api/flowers/cosmos";

function getFlowerColors(flowerData) {
  return flowerData
    .map((flower) => ({ [flower.name]: flower.hex }))
    .reduce((result, current) => {
      return Object.assign(result, current);
    }, {});
}

const cosmos = getFlowerColors(data.flowers);

export default {
  space: [0, 4, 8, 16, 32, 64],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
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
  text: {
    heading: {
      fontFamily: "heading",
    },
  },
};
