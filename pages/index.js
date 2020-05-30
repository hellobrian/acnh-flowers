import React from "react";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error } = useSWR("/api/flowers/cosmos", fetcher);

  if (error) {
    return <div>Error! {error}</div>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridGap: "2rem",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyItems: "center",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!data && <div>Loading...</div>}

      {data &&
        data.flowers.map((flower) => (
          <div
            style={{
              display: "grid",
              gridGap: 8,
              gridTemplateColumns: "1fr 1fr",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: flower.hex,
                width: 80,
                height: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
              }}
            />
            <img
              style={{ width: 40, height: 40 }}
              src={flower.image}
              alt={`flower-${flower.name}`}
            />
          </div>
        ))}
    </div>
  );
}
