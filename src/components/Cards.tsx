import cardBack from "/images/bg-card-back.png";
import cardFront from "/images/bg-card-front.png";
import cardLogo from "/images/card-logo.svg";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { CardInfo } from "../interfaces/index";

function CardDisplay(cardDetails: CardInfo) {
  const { name, number, expDateMonth, expDateYear, cvcNumber } = cardDetails;

  return (
    <Box pos="absolute" ml="-275px" mt="156px">
      {/* <Container> */}
      {/* Card 1 */}
      <Box ml="-75px">
        <Box boxShadow="2xl" borderRadius="lg">
          <Box pos="absolute" p={6}>
            <img src={cardLogo.src} />
            <Flex direction="column" gap="6" color="white" mt="52px">
              <Heading as="h3" size="xl" fontSize="32px" color="white">
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
        </Box>
        {/* base card */}
        <img src={cardFront.src} />
      </Box>
      {/* </Container> */}
      {/* Card 2 */}
      <Box mt="36px" boxShadow="2xl" borderRadius="lg">
        <Flex direction="row" justify="flex-end" color="white">
          <Box pos="absolute" flex="1" transform="translate(-48px, 105px)">
            <Text>{cvcNumber}</Text>
          </Box>
        </Flex>
        <img src={cardBack.src} />
      </Box>
    </Box>
  );
}

export default CardDisplay;
