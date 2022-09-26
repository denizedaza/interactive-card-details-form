import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CardInfo } from "../interfaces";

import styles from "./CardDetails.module.css";

import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  GridItem,
  Button,
} from "@chakra-ui/react";

function CardForm() {
  const methods = useFormContext<CardInfo>();
  const {
    register,
    formState: { errors },
  } = methods;

  function checkIfInvalid(value: string): boolean {
    return Object.hasOwn(errors, value);
  }

  return (
    <>
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
          render={({ message }) => <p className={styles.error}>{message}</p>}
        />
        <FormLabel mt={5}>Card Number</FormLabel>
        <Input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register("number", {
            required: "Can't be blank",
            validate: {
              validCardLength: (num) => num.length <= 19,
            },
            pattern: {
              // value: /^[0-9]*\s*$/,
              value: /\d\s*/,
              message: "Wrong format, numbers only",
            },
            minLength: {
              value: 16,
              message: "Number is too short",
            },
            // maxLength: 19,
          })}
          isInvalid={checkIfInvalid("number")}
        />
        <ErrorMessage
          errors={errors}
          name="number"
          render={({ message }) => <p className={styles.error}>{message}</p>}
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
                    pattern: {
                      value: /\d*/,
                      message: "Wrong format, numbers only",
                    },
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
                    pattern: {
                      value: /\d*/,
                      message: "Wrong format, numbers only",
                    },
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
                pattern: {
                  value: /\d*/,
                  message: "Wrong format, numbers only",
                },
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
    </>
  );
}

export default CardForm;
