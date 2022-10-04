import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import cardBack from "/images/bg-card-back.png";
import styles from "./Cards.module.css";

function BackCard(props) {
  const { cvcNumber } = props;

  return (
    <>
      <Box boxShadow="2xl" borderRadius="lg">
        <Flex direction="row" justify="flex-end" color="white">
          <Box
            pos="absolute"
            flex="1"
            transform="translate(-48px, 105px)"
            className={styles.card}
          >
            <Text>{cvcNumber}</Text>
          </Box>
        </Flex>
        <Image src={cardBack.src} width={447} height={245} />
      </Box>
    </>
  );
}

export default BackCard;
