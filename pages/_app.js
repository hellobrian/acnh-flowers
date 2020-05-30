// import App from 'next/app'
import React from "react";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import { Box, Heading, Text, ThemeProvider } from "theme-ui";
import theme from "styles/theme";
const mdComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  pre: (props) => (
    <Text sx={{ bg: "primary", color: "text", p: 3 }} as="pre" {...props} />
  ),
  code: (props) => (
    <Text
      sx={{ bg: "primary", color: "cosmos.pink", fontSize: 3 }}
      as="code"
      {...props}
    />
  ),
};

function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const isDocsPath = router.pathname.includes("/docs");

  return (
    <ThemeProvider theme={theme}>
      {isDocsPath ? (
        <MDXProvider components={mdComponents}>
          <Box sx={{ p: "m" }}>
            <Component {...pageProps} />
          </Box>
        </MDXProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
