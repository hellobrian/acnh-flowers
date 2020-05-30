import React from "react";
import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import { Grid, Flex, Box } from "theme-ui";

export default function Home() {
  const { data, error } = useSWR("/api/flowers/cosmos", fetcher);

  if (error) {
    return <div>Error! {error}</div>;
  }

  return (
    <Grid
      gap={2}
      columns={[3]}
      sx={{
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
          <Flex
            key={flower.id}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Box
              sx={{
                background: flower.hex,
                width: 80,
                height: 80,
                border: "1px solid black",
              }}
            />
            <img
              style={{ width: 40, height: 40 }}
              src={flower.image}
              alt={`flower-${flower.name}`}
            />
          </Flex>
        ))}
    </Grid>
  );
}
