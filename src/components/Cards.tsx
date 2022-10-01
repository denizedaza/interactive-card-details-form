import Image from "next/image";

import cardBack from "/images/bg-card-back.png";
import { Box, Flex, Text } from "@chakra-ui/react";

import { CardInfo } from "../interfaces/index";
import FrontCard from "./FrontCard";

function CardDisplay(cardDetails: CardInfo) {
  const { name, number, expDateMonth, expDateYear, cvcNumber } = cardDetails;

  return (
    <Box pos="absolute" ml="-275px" mt="156px">
      {/* <Container> */}
      {/* Card 1 */}
      <Box ml="-75px">
        <FrontCard
          cardholderName={name}
          cardNumber={number}
          expDateMonth={expDateMonth}
          expDateYear={expDateYear}
        />
      </Box>
      {/* </Container> */}
      {/* Card 2 */}
      <Box mt="36px" boxShadow="2xl" borderRadius="lg">
        <Flex direction="row" justify="flex-end" color="white">
          <Box pos="absolute" flex="1" transform="translate(-48px, 105px)">
            <Text>{cvcNumber}</Text>
          </Box>
        </Flex>
        <Image src={cardBack.src} width={447} height={245} />
      </Box>
    </Box>
  );
}

export default CardDisplay;
