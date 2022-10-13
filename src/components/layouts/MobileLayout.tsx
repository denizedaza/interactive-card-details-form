import mobileImg from "/images/bg-main-mobile.png";
import Image from "next/image";
import { Stack } from "@chakra-ui/react";

export const MobileLayout = ({ children }) => {
  return (
    <Stack direction="column">
      <Image src={mobileImg} />
      {children}
    </Stack>
  );
};

export const getLayout = (page) => {
  return <MobileLayout>{page}</MobileLayout>;
};
