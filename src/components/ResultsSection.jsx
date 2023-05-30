import { VStack } from "@chakra-ui/react";
import { ResultText } from "./ResultText";

export function ResultsSection({ dayResult, monthResult, yearResult }) {
  return (
    <VStack mb={["10px", "10px", "-20px"]} w={350} spacing="-5">
      <ResultText result={yearResult} label="years" />
      <ResultText result={monthResult} label="months" />
      <ResultText result={dayResult} label="days" />
    </VStack>
  );
}
