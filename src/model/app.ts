import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

export type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};
