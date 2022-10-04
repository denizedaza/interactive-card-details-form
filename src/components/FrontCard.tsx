import { Container, Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

import cardFront from "/images/bg-card-front.png";
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
      <Container as="article" className={styles.article}>
        <Box boxShadow="2xl" borderRadius="lg">
          <Box pos="absolute" p={6} className={styles.card}>
            <img src={cardLogo.src} />
            <Flex direction="column" gap="6" color="white" mt="52px">
              <Heading as="h3" size="xl" fontSize="32px" color="white">
                {cardNumber}
              </Heading>
              <Flex gap="116px">
                <Text as="p">{cardholderName}</Text>
                <Spacer />
                <Text as="p">
                  {expDateMonth}/{expDateYear}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Image src={cardFront.src} width={447} height={245} />
        </Box>
      </Container>
    </>
  );
}

export default FrontCard;
