import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import type { NextPage } from "next";
import RootLayout from "../components/Layout";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return getLayout(
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
