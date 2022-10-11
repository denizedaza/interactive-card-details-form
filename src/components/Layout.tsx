import React, { ReactNode, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { Stack } from "@chakra-ui/react";
import backgroundImg from "/images/bg-main-desktop.png";
import mobileImg from "/images/bg-main-mobile.png";

import styles from "./Layout.module.css";

type Props = {
  children?: ReactNode;
  title?: string;
};

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const Layout = ({ children, title = "Interactive Card Details" }: Props) => {
  const isBreakpoint = useMediaQuery(768);
  let backImg = isBreakpoint ? mobileImg : backgroundImg;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header></header>
      <Stack direction={{ base: "column", lg: "row" }}>
        <Image src={backImg} className={styles.backImg} />
        {children}
      </Stack>
    </div>
  );
};

export default Layout;
