import cardBack from "/images/bg-card-back.png";
import cardFront from "/images/bg-card-front.png";
import cardLogo from "/images/card-logo.svg";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { CardInfo } from "../interfaces/index";
import { CardLogo } from "../icons/Icon";

function CardDisplay(props: CardInfo) {
  const { name, number, expDateMonth, expDateYear, cvcNumber } = props;

  return (
    <Box pos="absolute" ml="-265px" mt="166px">
      <Container>
        <Box ml="-100px" boxShadow="2xl">
          <Box pos="absolute" p={6}>
            <img src={cardLogo.src} />
            <Flex direction="column" gap="4" color="white" mt="52px">
              <Heading as="h3" size="xl" fontSize="35px" color="white">
                {number}
              </Heading>
              <Flex>
                <Text as="p">{name}</Text>
                <Spacer />
                <Text as="p">
                  {expDateMonth}/{expDateYear}
                </Text>
              </Flex>
            </Flex>
          </Box>
          {/* base card */}
          <img src={cardFront.src} className="object-none" />
        </Box>
        <Box mt="36px" boxShadow="2xl">
          <Box pos="absolute">
            <Text color="white">{cvcNumber}</Text>
          </Box>
          <img src={cardBack.src} className="object-none" />
        </Box>
      </Container>
    </Box>
  );
}

export default CardDisplay;
