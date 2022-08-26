import cardBack from "/images/bg-card-back.png";
import cardFront from "/images/bg-card-front.png";
import { Box, Container } from "@chakra-ui/react";

function CardDisplay() {
  return (
    <Box pos="absolute" ml="-265px" mt="166px">
      <Container>
        <Box ml="-100px" boxShadow="2xl">
          <img src={cardFront.src} className="object-none" />
        </Box>
        <Box mt="48px" boxShadow="2xl">
          <img src={cardBack.src} className="object-none" />
        </Box>
      </Container>
    </Box>
  );
}

export default CardDisplay;
