import NextHead from "next/head";

const AppHead = ({ children }: { children: string }) => (
  <NextHead>
    <title>{children}</title>
    <meta
      property="og:description"
      content="A simple web app that displays an infinite scrolling of house data."
    />
    <meta property="og:image" content="logo.png" />
  </NextHead>
);

export default AppHead;
