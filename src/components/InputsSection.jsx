import { Divider, Flex, IconButton } from "@chakra-ui/react";
import { NmbrInput } from "./NmbrInput";
import { ArrowIcon } from "../assets/icons/ArrowIcon";

export function InputsSection({
  inputDayValue,
  inputMonthValue,
  inputYearValue,
  handleDayChange,
  handleMonthChange,
  handleYearChange,
  onCalculate,
  dayError,
  dayErrorMsg,
  monthError,
  monthErrorMsg,
  yearError,
  yearErrorMsg,
  handleDayError,
  handleMonthError,
  handleYearError,
}) {
  return (
    <Flex mb={[4, 4, 0]} gap={16} flexDir="column">
      <Flex
        gap={[0, 0, 6]}
        bg=""
        w="330px"
        flexDir="row"
        justify="space-between"
      >
        <NmbrInput
          labelName="DAY"
          placeholder="DD"
          inputValue={inputDayValue}
          inputDayValue={inputDayValue}
          inputError={dayError}
          errorMessage={dayErrorMsg}
          handleBlur={handleDayError}
          handleChange={handleDayChange}
        />

        <NmbrInput
          labelName="MONTH"
          placeholder="MM"
          inputValue={inputMonthValue}
          inputError={monthError}
          errorMessage={monthErrorMsg}
          handleBlur={handleMonthError}
          handleChange={handleMonthChange}
        />
        <NmbrInput
          labelName="YEAR"
          placeholder="YYYY"
          inputValue={inputYearValue}
          inputError={yearError}
          errorMessage={yearErrorMsg}
          handleBlur={handleYearError}
          handleChange={handleYearChange}
        />
      </Flex>
      <Flex align="center" justify="center" position="relative">
        <Divider h="1px" bgColor="hsl(0, 0%, 86%)" />
        <IconButton
          onClick={onCalculate}
          position="absolute"
          mr="auto"
          ml="auto"
          top="-1.5rem"
          right={["auto", "auto", "0px"]}
          bg="hsl(259, 100%, 65%)"
          isRound
          size="lg"
          _hover={{ bg: "hsl(0, 0%, 8%)" }}
          _active={{ transform: "translate(0px, 4px)" }}
          icon={<ArrowIcon />}
        />
      </Flex>
    </Flex>
  );
}
