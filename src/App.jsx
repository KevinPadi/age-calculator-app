import { Flex } from "@chakra-ui/react";
import { ResultsSection } from "./components/ResultsSection";
import { InputsSection } from "./components/InputsSection";
import { useState } from "react";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState(false);
  const [dayErrorMsg, setDayErrorMsg] = useState("");
  const [monthError, setMonthError] = useState(false);
  const [monthErrorMsg, setMonthErrorMsg] = useState("");

  const [yearError, setYearError] = useState(false);
  const [yearErrorMsg, setYearErrorMsg] = useState("");

  const [dayResult, setDayResult] = useState("- -");
  const [monthResult, setMonthResult] = useState("- -");
  const [yearResult, setYearResult] = useState("- -");

  const handleDayChange = (e) => {
    let day = e.target.value;
    setDay(day);
    console.log(day);
  };
  const handleMonthChange = (e) => {
    let month = e.target.value;
    setMonth(month);
  };
  const handleYearChange = (e) => {
    let year = e.target.value;
    setYear(year);
  };

  const handleDayError = () => {
    if (day === "" || isNaN(day)) {
      setDayError(true);
      setDayErrorMsg("This field is required");
    } else if (day > 31 || day < 1) {
      setDayError(true);
      setDayErrorMsg("Must be a valid day");
    } else {
      setDayError(false);
    }
  };

  const handleMonthError = () => {
    if (month === "" || isNaN(month)) {
      setMonthError(true);
      setMonthErrorMsg("This field is required");
    } else if (month > 12 || month < 1) {
      setMonthError(true);
      setMonthErrorMsg("Must be a valid month");
    } else {
      setMonthError(false);
    }
  };
  const handleYearError = () => {
    if (year === "" || isNaN(year)) {
      setYearError(true);
      setYearErrorMsg("This field is required");
    } else if (year > 2022 || year < 1) {
      setYearError(true);
      setYearErrorMsg("Must be a valid year");
    } else {
      setYearError(false);
    }
  };

  const onCalculate = () => {
    const fecha = new Date();
    const actualDay = fecha.getDate();
    const actualMonth = fecha.getMonth() + 1;
    const actualYear = fecha.getFullYear();

    handleDayError();
    handleMonthError();
    handleYearError();

    if (day === "" || month === "" || year === "" || year.length > 4) {
      return;
    } else if (actualDay < day && actualMonth < month) {
      setDayResult(actualDay + 30 - day);
      setMonthResult(actualMonth - 1 + 12 - month);
      setYearResult(actualYear - 1 - year);
    } else if (actualDay < day) {
      setDayResult(actualDay + 30 - day);
      setMonthResult(actualMonth - 1 - month);
      setYearResult(actualYear - year);
    } else if (actualMonth < month) {
      setDayResult(actualDay - day);
      setMonthResult(actualMonth + 12 - month);
      setYearResult(actualYear - 1 - year);
    } else {
      setDayResult(actualDay - day);
      setMonthResult(actualMonth - month);
      setYearResult(actualYear - year);
    }
  };

  return (
    <Flex h="100vh" align="center" justify="center">
      <Flex
        borderRadius="15px 15px 100px 15px"
        gap={[6, 6, 5]}
        flexDir="column"
        p={[6, 6, 8]}
        w={[360, 360, 500]}
        bg="hsl(0, 0%, 100%)"
      >
        <InputsSection
          dayValue={day}
          monthValue={month}
          yearValue={year}
          handleDayChange={handleDayChange}
          handleMonthChange={handleMonthChange}
          handleYearChange={handleYearChange}
          onCalculate={onCalculate}
          dayError={dayError}
          dayErrorMsg={dayErrorMsg}
          monthError={monthError}
          monthErrorMsg={monthErrorMsg}
          yearError={yearError}
          yearErrorMsg={yearErrorMsg}
          handleDayError={handleDayError}
          handleMonthError={handleMonthError}
          handleYearError={handleYearError}
        />
        <ResultsSection
          dayResult={dayResult}
          monthResult={monthResult}
          yearResult={yearResult}
        />
      </Flex>
    </Flex>
  );
}

export default App;
