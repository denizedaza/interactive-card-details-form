import React, { ReactNode } from "react";
import Image from "next/image";
import Head from "next/head";
import { Stack } from "@chakra-ui/react";
import backgroundImg from "/images/bg-main-desktop.png";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Interactive Card Details" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header></header>
    <Stack direction="row">
      <Image src={backgroundImg} />
      {children}
    </Stack>
  </div>
);

export default Layout;
