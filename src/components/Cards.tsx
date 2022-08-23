import cardBack from "/images/bg-card-back.png";
import cardFront from "/images/bg-card-front.png";
import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";

function CardDisplay() {
  return (
    <Box>
      <Box>
        <img src={cardFront.src} className="object-none" />
        <img src={cardBack.src} className="object-none" />
      </Box>
    </Box>
  );
}

export default CardDisplay;
