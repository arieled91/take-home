import "../styles/defaults.css";
import "../styles/globals.css";
import { AppPropsWithLayout } from "@/model/app";

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Fetching layout from page. Adding layout this way improves performance
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
