import Cards from "./Cards";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

function CardDetails() {
  return (
    <Box>
      <Cards />
      <FormControl>
        <FormLabel>Cardholder Name</FormLabel>
        <Input placeholder="e.g Jane Appleseed" type="text" mb="24px" />
        <FormLabel>Card Number</FormLabel>
        <Input type="number" placeholder="e.g. 1234 5678 9123 0000" />
        <FormLabel>Expiry Date (MM/YY)</FormLabel>
        <Input type="number" placeholder="MM" />
        <Input type="number" placeholder="YY" />
        <FormLabel>CVC</FormLabel>
        <Input type="number" placeholder="e.g. 123" />

        <Button>Confirm</Button>
      </FormControl>
    </Box>
  );
}

export default CardDetails;
