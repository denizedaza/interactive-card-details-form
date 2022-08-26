import Cards from "./Cards";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Input,
  SimpleGrid,
  GridItem,
  Button,
} from "@chakra-ui/react";

function CardDetails() {
  return (
    <Box>
      <Cards />
      <Container bg="red.400" centerContent transform="translate(25%, 50%)">
        <VStack w="full" h="full" p={10} spacing="24px">
          <FormControl>
            <FormLabel>Cardholder Name</FormLabel>
            <Input placeholder="e.g Jane Appleseed" type="text" />
            <FormLabel>Card Number</FormLabel>
            <Input type="number" placeholder="e.g. 1234 5678 9123 0000" />
            <SimpleGrid columns={2} columnGap={3} rowGap={2}>
              <GridItem colSpan={1}>
                <FormLabel>Expiry Date (MM/YY)</FormLabel>
                {/* separate dates into smaller grid */}
                <SimpleGrid columns={2}>
                  <GridItem colSpan={1}>
                    <Input type="number" placeholder="MM" />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Input type="number" placeholder="YY" />
                  </GridItem>
                </SimpleGrid>
              </GridItem>
              <GridItem colSpan={1}>
                <FormLabel>CVC</FormLabel>
                <Input type="number" placeholder="e.g. 123" />
              </GridItem>
            </SimpleGrid>
            <Button colorScheme="blackAlpha" size="lg" w="full">
              Confirm
            </Button>
          </FormControl>
        </VStack>
      </Container>
    </Box>
  );
}

export default CardDetails;
