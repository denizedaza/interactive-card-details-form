import cardBack from "/images/bg-card-back.png";
import cardFront from "/images/bg-card-front.png";
import { Box, Container, Icon, Text } from "@chakra-ui/react";
import { CardInfo } from "../interfaces/index";
import { CardLogo, CompleteIcon } from "../icons/Icon";

function CardDisplay(props: CardInfo) {
  const { name, number, expDateMonth, expDateYear, cvcNumber } = props;

  return (
    <Box pos="absolute" ml="-265px" mt="166px">
      <Container>
        <Box ml="-100px" boxShadow="2xl">
          <Icon as={CardLogo} pos="absolute" />
          <img src={cardFront.src} className="object-none" />
        </Box>
        <Box mt="36px" boxShadow="2xl">
          <Text>{cvcNumber}</Text>
          <img src={cardBack.src} className="object-none" />
        </Box>
      </Container>
    </Box>
  );
}

export default CardDisplay;
