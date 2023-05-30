import {
  FormLabel,
  NumberInput,
  NumberInputField,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

export function NmbrInput({
  inputValue,
  inputError,
  errorMessage,
  handleChange,
  labelName,
  placeholder,
  handleBlur,
}) {
  return (
    <FormControl onBlur={handleBlur} isInvalid={inputError} w={100}>
      <FormLabel
        _invalid={{ color: "hsl(0, 100%, 67%)" }}
        letterSpacing={3}
        fontSize="10px"
        fontWeight="400"
        color="hsl(0, 1%, 44%)"
      >
        {labelName}
      </FormLabel>
      <NumberInput
        value={inputValue}
        name={name}
        w={[20, 20, 110]}
        min={1}
        border={1}
        borderColor="hsl(0, 1%, 44%)"
        focusBorderColor="hsl(259, 100%, 65%)"
        errorBorderColor="hsl(0, 100%, 67%)"
        size="lg"
      >
        <NumberInputField
          onChange={handleChange}
          bg="hsl(189, 41%, 97%)"
          color="hsl(0, 0%, 8%)"
          fontSize={["md", "md", "lg"]}
          placeholder={placeholder}
          fontWeight=""
          max="10"
          min={1}
          p={4}
        />
      </NumberInput>
      {inputError ? (
        <FormErrorMessage
          w={["auto", "auto", "110px"]}
          position="absolute"
          color="hsl(0, 100%, 67%)"
          fontSize={10}
          fontWeight={200}
        >
          {errorMessage}
        </FormErrorMessage>
      ) : (
        ""
      )}
    </FormControl>
  );
}
