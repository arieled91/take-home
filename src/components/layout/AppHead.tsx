import NextHead from "next/head";

const AppHead = ({ children }: { children: string }) => (
  <NextHead>
    <title>{children}</title>
    <meta property="og:title" content={children} />
    <meta
      property="og:description"
      content="A simple web app that displays an infinite scrolling of house data."
    />
  </NextHead>
);

export default AppHead;
