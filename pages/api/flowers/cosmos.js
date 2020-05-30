// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const baseUrl = process.env.BASE_URL;

export default function getCosmos(req, res) {
  res.statusCode = 200;
  res.json({
    flowers: [
      {
        name: "red",
        hex: "#e8492f",
        image: `${baseUrl}/cosmos/cosmos-red.webp`,
        breeding: [],
      },
      {
        name: "white",
        hex: "#ffffff",
        image: `${baseUrl}/cosmos/cosmos-white.png`,
        breeding: [],
      },
      {
        name: "pink",
        hex: "#ff81c5",
        image: `${baseUrl}/cosmos/cosmos-pink.png`,
        breeding: [
          {
            name: "red",
            type: null,
          },
          { name: "white", type: null },
        ],
      },
      {
        name: "yellow",
        hex: "#ffea47",
        image: `${baseUrl}/cosmos/cosmos-yellow.webp`,
        breeding: [],
      },
      {
        name: "orange",
        hex: "#fc981c",
        image: `${baseUrl}/cosmos/cosmos-orange.webp`,
        breeding: [
          {
            name: "red",
            type: null,
          },
          {
            name: "yellow",
            type: null,
          },
        ],
      },
      {
        name: "black",
        hex: "#5b2729",
        image: `${baseUrl}/cosmos/cosmos-black.webp`,
        breeding: [
          { name: "orange", type: "island" },
          { name: "orange", type: "island" },
        ],
      },
    ],
  });
}
