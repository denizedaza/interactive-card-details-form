import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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

import { CardInfo } from "../interfaces/index";

function CardDetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CardInfo>();
  const defaultCardInfo: CardInfo = {
    name: "Jane Appleseed",
    number: "0000 0000 0000 0000",
    expDateMonth: "00",
    expDateYear: "00",
    cvcNumber: "000",
  };

  const [cardInfo, setCardInfo] = useState<CardInfo>(defaultCardInfo);

  return (
    <Box>
      <Cards
        name={defaultCardInfo.name}
        number={defaultCardInfo.number}
        expDateMonth={defaultCardInfo.expDateMonth}
        expDateYear={defaultCardInfo.expDateYear}
        cvcNumber={defaultCardInfo.cvcNumber}
      />
      <Container
        bg="red.400"
        centerContent
        transform="translate(40%, 53%)"
        alignItems="flex-start"
      >
        <VStack w="full" h="full" p={10} spacing={10}>
          <FormControl>
            <FormLabel>Cardholder Name</FormLabel>
            <Input placeholder="e.g Jane Appleseed" type="text" />
            <FormLabel mt={5}>Card Number</FormLabel>
            <Input type="number" placeholder="e.g. 1234 5678 9123 0000" />
            <SimpleGrid columns={2} columnGap={6} rowGap={2}>
              <GridItem colSpan={1}>
                <FormLabel mt={5}>Expiry Date (MM/YY)</FormLabel>
                {/* separate dates into smaller grid */}
                <SimpleGrid columns={2} columnGap={3}>
                  <GridItem colSpan={1}>
                    <Input type="number" placeholder="MM" />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Input type="number" placeholder="YY" />
                  </GridItem>
                </SimpleGrid>
              </GridItem>
              <GridItem colSpan={1}>
                <FormLabel mt={5}>CVC</FormLabel>
                <Input type="number" placeholder="e.g. 123" />
              </GridItem>
            </SimpleGrid>
            <Button
              colorScheme="blackAlpha"
              bg="black"
              size="lg"
              w="full"
              mt={8}
              type="submit"
            >
              Confirm
            </Button>
          </FormControl>
        </VStack>
      </Container>
    </Box>
  );
}

export default CardDetails;
