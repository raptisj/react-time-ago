import React, { useState } from "react";
import "./App.css";
import TimeAgo from "./components/TimeAgo"; // this could be external package as well
import {
  ThemeProvider,
  Select,
  Checkbox,
  Input,
  Box,
  Grid,
  Radio,
  RadioGroup,
} from "@chakra-ui/core";
import { CopyBlock, dracula } from "react-code-blocks";
import DateTimePicker from "react-datetime-picker";

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [selectFormat, setSelectFormat] = useState("DD MM YY");
  const [dateWithTime, setDateWithTime] = useState(true);
  const [initialName, setInitialName] = useState("Created");
  const [separator, setSeparator] = useState("/");

  // example date
  let now = "Sun Feb 12 2020 15:13:14";
  // let now = "Fri Jul 24 2020 14:23:14";

  // if default don't show
  const markdown = `
      <TimeAgo
        date='${dateTime}'
        dateFormat='${selectFormat}'
        dateWithTime={${dateWithTime}} 
        label='${initialName}'
        separator='${separator}'
        className="container"
      />

`;

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setInitialName("Created");
    } else {
      setInitialName(e.target.value);
    }
  };

  const onChangeDateTime = (date) => {
    setDateTime(date);
  };

  return (
    <ThemeProvider>
      <React.Fragment>
        <header>
          <Box maxW="1280px" mx="auto">
            <h1>
              <span> Time Ago </span>
            </h1>

            <p>A way to see how much time passed since creation.</p>

            <TimeAgo
              date={dateTime}
              dateFormat={selectFormat}
              dateWithTime={dateWithTime}
              label={initialName}
              separator={separator}
              className="container"
            />
          </Box>
        </header>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="16px"
          p="32px"
          mx="auto"
          maxW="1280px"
        >
          <Box>
            <div className="each-changer">
              <DateTimePicker
                onChange={(e) => onChangeDateTime(e)}
                value={dateTime}
                maxDate={new Date()}
                clearIcon={null}
                // amPmAriaLabel=""
                // dayPlaceholder={null}
                // defaultView=""
                // disableClock={true}
                // monthPlaceholder={false}
              />
            </div>

            <div className="each-changer">
              <label>Select Date Format</label>
              <Select
                placeholder="Select option"
                onChange={(e) => setSelectFormat(e.target.value)}
              >
                <option value="DD mm YY">
                  Day, Month and Year all in numbers (DD mm YY)
                </option>
                <option value="DD MM YY">
                  Month full name. Day and Year in numbers (DD MM YY)
                </option>
                <option value="DD M YY">
                  Month short name. Day and Year in numbers (DD M YY)
                </option>
                <option value="dd mm YY">
                  Day with both name and number, Month and Year in numbers (dd
                  mm YY)
                </option>
                <option value="DD mm yy">
                  Day and Month in numbers. Year only last two digits. (DD mm
                  yy)
                </option>
              </Select>
            </div>

            <div className="each-changer">
              <Checkbox
                defaultIsChecked
                onChange={(e) => setDateWithTime(!dateWithTime)}
              >
                Display Time
              </Checkbox>
            </div>

            <div className="each-changer">
              <label>Change initial name</label>
              <Input
                type="text"
                placeholder={initialName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="each-changer">
              <label>Change separator symbol</label>
              <RadioGroup
                onChange={(e) => setSeparator(e.target.value)}
                value={separator}
              >
                <Radio value="/">/ (slash)</Radio>
                <Radio value="-">- (dash)</Radio>
                <Radio value="🤓">🤓 (nerd face)</Radio>
              </RadioGroup>
            </div>
          </Box>
          <div>
            <CopyBlock
              text={markdown}
              language="text"
              showLineNumbers={false}
              wrapLines
              theme={dracula}
            />
          </div>
        </Grid>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
