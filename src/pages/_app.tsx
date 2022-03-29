import "../styles/defaults.css";
import "../styles/globals.css";
import { AppPropsWithLayout } from "../model/app";

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
