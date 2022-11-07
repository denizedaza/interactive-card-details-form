import React, { useState } from "react";
import { Box, Container, Stack, VStack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

import Cards from "./Cards";
import { CardInfo } from "../interfaces/index";
import CardForm from "./CardForm";
import ThankYouPage from "./ThankYouPage";

function CardDetails() {
  const defaultCardInfo: CardInfo = {
    name: "Jane Appleseed".toUpperCase(),
    number: "0000 0000 0000 0000",
    expDateMonth: "00",
    expDateYear: "00",
    cvcNumber: "000",
  };

  const [cardInfo, setCardInfo] = useState<CardInfo>(defaultCardInfo);
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const methods = useForm<CardInfo>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  function formatCardNumber(string: string): string {
    if (
      string.includes(" ", 4) &&
      string.includes(" ", 9) &&
      string.includes(" ", 14)
    ) {
      return string;
    }
    let formattedCardNumber: string = "";
    // remove spaces with regex
    // string = string.replace(/\s/g, "");

    for (let i = 0; i < string.length; i++) {
      // add space if modulus of 4 is 0
      if (i % 4 == 0 && i > 0) {
        formattedCardNumber = formattedCardNumber.concat(" ");
      }
      formattedCardNumber = formattedCardNumber.concat(string[i]);
    }

    return formattedCardNumber.slice(0, 19);
  }

  function handleCardSubmit(values: CardInfo) {
    const newCardInfo = {
      name: values.name.toUpperCase(),
      number: formatCardNumber(values.number),
      expDateMonth: values.expDateMonth,
      expDateYear: values.expDateYear,
      cvcNumber: values.cvcNumber,
    };
    setCardInfo(newCardInfo);
    // router.push("/thank-you");
    setIsFormComplete(true);
  }

  function handleContinueClick() {
    setIsFormComplete(false);
  }

  return (
    <Box>
      <Stack direction={{ base: "column", lg: "row" }}>
        <Box pos="absolute" ml="-320px" mt="156px">
          <Cards
            name={cardInfo.name}
            number={cardInfo.number}
            expDateMonth={cardInfo.expDateMonth}
            expDateYear={cardInfo.expDateYear}
            cvcNumber={cardInfo.cvcNumber}
          />
        </Box>
        <Container
          centerContent
          transform="translate(36%, 50%)"
          alignItems="flex-start"
        >
          <VStack w="full" h="full" p={10} spacing="24px">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(handleCardSubmit)}>
                {isFormComplete ? (
                  <ThankYouPage onContinueClick={handleContinueClick} />
                ) : (
                  <CardForm />
                )}
              </form>
            </FormProvider>
          </VStack>
        </Container>
      </Stack>
    </Box>
  );
}

export default CardDetails;
