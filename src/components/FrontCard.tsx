import { Container, Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

import frontCard from "/images/bg-card-front.png";
import cardLogo from "/images/card-logo.svg";

import styles from "./Cards.module.css";

interface FrontCardProps {
  cardNumber: string;
  cardholderName: string;
  expDateMonth: string;
  expDateYear: string;
}

function FrontCard(props: FrontCardProps) {
  const { cardNumber, cardholderName, expDateMonth, expDateYear } = props;

  return (
    <>
      <Box as="article" className={styles.cardFront}>
        <Box
          borderRadius={"xl"}
          rounded={"md"}
          maxHeight={"245px"}
          boxShadow={"2xl"}
        >
          <Box pos="absolute" p={6} className={styles.card}>
            <img src={cardLogo.src} />
            <Flex direction="column" gap="6" color="white" mt="52px">
              <Heading
                as="h3"
                size="xl"
                fontSize="32px"
                color="white"
                className={styles.text}
              >
                {cardNumber}
              </Heading>
              <Flex gap="116px">
                <Text as="p" fontSize="14px" className={styles.text}>
                  {cardholderName}
                </Text>
                <Spacer />
                <Text as="p" fontSize="14px" className={styles.text}>
                  {expDateMonth}/{expDateYear}
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Image
            src={frontCard.src}
            width={447}
            height={245}
            layout={"intrinsic"}
          />
        </Box>
      </Box>
    </>
  );
}

export default FrontCard;
