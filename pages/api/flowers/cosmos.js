// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const data = {
  flowers: [
    {
      id: 1,
      name: "red",
      hex: "#e8492f",
      image: `/cosmos/cosmos-red.webp`,
      breeding: [],
    },
    {
      id: 2,
      name: "white",
      hex: "#ffffff",
      image: `/cosmos/cosmos-white.png`,
      breeding: [],
    },
    {
      id: 3,
      name: "pink",
      hex: "#ff81c5",
      image: `/cosmos/cosmos-pink.png`,
      breeding: [
        {
          name: "red",
          type: null,
        },
        { name: "white", type: null },
      ],
    },
    {
      id: 4,
      name: "yellow",
      hex: "#ffea47",
      image: `/cosmos/cosmos-yellow.webp`,
      breeding: [],
    },
    {
      id: 5,
      name: "orange",
      hex: "#fc981c",
      image: `/cosmos/cosmos-orange.webp`,
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
      id: 6,
      name: "black",
      hex: "#5b2729",
      image: `/cosmos/cosmos-black.webp`,
      breeding: [
        { name: "orange", type: "island" },
        { name: "orange", type: "island" },
      ],
    },
  ],
};

export default function getCosmos(req, res) {
  res.statusCode = 200;
  res.json(data);
}
