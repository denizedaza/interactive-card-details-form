import { Box, Container } from "@chakra-ui/react";

import { CardInfo } from "../interfaces/index";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

function Cards(cardDetails: CardInfo) {
  const { name, number, expDateMonth, expDateYear, cvcNumber } = cardDetails;

  return (
    <Box>
      {/* <Container> */}
      <FrontCard
        cardholderName={name}
        cardNumber={number}
        expDateMonth={expDateMonth}
        expDateYear={expDateYear}
      />
      <BackCard cvcNumber={cvcNumber} />
      {/* </Container> */}
    </Box>
  );
}

export default Cards;
