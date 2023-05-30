import { Stat, StatNumber, StatLabel, HStack } from "@chakra-ui/react";

export function ResultText({ label, result }) {
  return (
    <Stat w="100%">
      <HStack>
        <StatNumber
          color="hsl(259, 100%, 65%)"
          fontSize={["5xl", "5xl", "6xl"]}
          as="i"
          fontWeight={700}
        >
          {result}
        </StatNumber>
        <StatLabel
          color="hsl(0, 0%, 8%)"
          fontSize={["5xl", "5xl", "6xl"]}
          as="i"
          fontWeight={800}
        >
          {label}
        </StatLabel>
      </HStack>
    </Stat>
  );
}
