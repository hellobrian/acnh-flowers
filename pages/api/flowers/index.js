// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getAllFlowers(req, res) {
  res.statusCode = 200;
  res.json({
    flowers: [
      "cosmos",
      "hyacinths",
      "lillies",
      "mums",
      "pansies",
      "roses",
      "tulips",
      "violets",
      "windflowers",
      "carnations",
    ],
  });
}
