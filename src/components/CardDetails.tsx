import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Cards from "./Cards";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  VStack,
  Input,
  SimpleGrid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import CompletedForm from "./CompletedForm";
import { CardInfo } from "../interfaces/index";
import styles from "./CardDetails.module.css";

function CardDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardInfo>();
  const defaultCardInfo: CardInfo = {
    name: "Jane Appleseed",
    number: "0000 0000 0000 0000",
    expDateMonth: "00",
    expDateYear: "00",
    cvcNumber: "000",
  };
  const router = useRouter();

  // const replacementTestCardInfo = {
  //   name: "Felicia Leire",
  //   number: "995184896389101E",
  //   expDateMonth: "09",
  //   expDateYear: "00",
  //   cvcNumber: "123"
  // }

  const [cardInfo, setCardInfo] = useState<CardInfo>(defaultCardInfo);

  function formatCardNumber(string: string): string {
    if (string.includes(" ", 4)) {
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

    return formattedCardNumber;
  }

  function onSubmit(values: CardInfo) {
    console.log(values);
    const newCardInfo = {
      name: values.name,
      number: formatCardNumber(values.number),
      expDateMonth: values.expDateMonth,
      expDateYear: values.expDateYear,
      cvcNumber: values.cvcNumber,
    };
    setCardInfo(newCardInfo);
  }
  console.log(errors);

  function checkIfInvalid(value: string): boolean {
    return Object.hasOwn(errors, value);
  }

  return (
    <Box>
      <Cards
        name={cardInfo.name}
        number={cardInfo.number}
        expDateMonth={cardInfo.expDateMonth}
        expDateYear={cardInfo.expDateYear}
        cvcNumber={cardInfo.cvcNumber}
      />
      <Container
        centerContent
        transform="translate(40%, 53%)"
        alignItems="flex-start"
      >
        <VStack w="full" h="full" p={10} spacing="24px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Cardholder Name</FormLabel>
              <Input
                placeholder="e.g Jane Appleseed"
                type="text"
                {...register("name", {
                  required: "Please enter your name",
                })}
                isInvalid={checkIfInvalid("name")}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <p className={styles.error}>{message}</p>
                )}
              />
              <FormLabel mt={5}>Card Number</FormLabel>
              <Input
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
                {...register("number", {
                  required: "Can't be blank",
                  pattern: {
                    // value: /^[0-9]*\s*$/,
                    value: /\d\s*/,
                    message: "Wrong format, numbers only",
                  },
                  minLength: {
                    value: 16,
                    message: "Number is too short",
                  },
                  maxLength: 19,
                })}
                isInvalid={checkIfInvalid("number")}
              />
              <ErrorMessage
                errors={errors}
                name="number"
                render={({ message }) => (
                  <p className={styles.error}>{message}</p>
                )}
              />
              <SimpleGrid columns={2} columnGap={6} rowGap={2}>
                <GridItem colSpan={1}>
                  <FormLabel mt={5}>Expiry Date (MM/YY)</FormLabel>
                  {/* separate dates into smaller grid */}
                  <SimpleGrid columns={2} columnGap={3}>
                    <GridItem colSpan={1}>
                      <Input
                        type="number"
                        placeholder="MM"
                        {...register("expDateMonth", {
                          required: "Can't be blank",
                          max: {
                            value: 12,
                            message: "Month is invalid",
                          },
                          maxLength: 2,
                        })}
                        isInvalid={checkIfInvalid("expDateMonth")}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="expDateMonth"
                        render={({ message }) => (
                          <p className={styles.error}>{message}</p>
                        )}
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Input
                        type="number"
                        placeholder="YY"
                        {...register("expDateYear", {
                          required: "Can't be blank",
                          min: {
                            value: 22,
                            message: "Year can't be less than current",
                          },
                          maxLength: 2,
                        })}
                        isInvalid={checkIfInvalid("expDateYear")}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="expDateYear"
                        render={({ message }) => (
                          <p className={styles.error}>{message}</p>
                        )}
                      />
                    </GridItem>
                  </SimpleGrid>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormLabel mt={5}>CVC</FormLabel>
                  <Input
                    type="number"
                    placeholder="e.g. 123"
                    {...register("cvcNumber", {
                      required: "Can't be blank",
                      maxLength: 3,
                      pattern: /^[0-9]{3}/,
                    })}
                    isInvalid={checkIfInvalid("cvcNumber")}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="cvcNumber"
                    render={({ message }) => (
                      <p className={styles.error}>{message}</p>
                    )}
                  />
                </GridItem>
              </SimpleGrid>
            </FormControl>
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
          </form>
        </VStack>
      </Container>
    </Box>
  );
}

export default CardDetails;
