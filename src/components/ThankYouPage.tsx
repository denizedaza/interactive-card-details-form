import { Container, Heading, Text, Button, VStack } from "@chakra-ui/react";
import completeLogo from "/images/icon-complete.svg";

function ThankYouPage({ onContinueClick }) {
  return (
    <Container
      centerContent
      transform="translate(40%, 53%)"
      alignItems="flex-start"
    >
      <VStack>
        <img src={completeLogo.src} alt="complete" />
        <Heading>THANK YOU!</Heading>
        <Text>We've added your card details</Text>
        <Button
          colorScheme="blackAlpha"
          bg="black"
          size="lg"
          w="full"
          mt={8}
          onClick={onContinueClick}
        >
          Continue
        </Button>
      </VStack>
    </Container>
  );
}

export default ThankYouPage;
