import { Box, Container } from "@chakra-ui/react";

import { CardInfo } from "../interfaces/index";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

function CardDisplay(cardDetails: CardInfo) {
  const { name, number, expDateMonth, expDateYear, cvcNumber } = cardDetails;

  return (
    <Box pos="absolute" ml="-275px" mt="156px">
      <Container ml="-75px">
        <FrontCard
          cardholderName={name}
          cardNumber={number}
          expDateMonth={expDateMonth}
          expDateYear={expDateYear}
        />
      </Container>

      <BackCard cvcNumber={cvcNumber} />
    </Box>
  );
}

export default CardDisplay;
