import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function TypeRadioReview({ score, setScore, index }) {
  return (
    <FormControl >
      <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue, index);
        }}
        // onChange={setScore(score, index)}
        sx={{
          flexDirection: "row"
        }}
      >
        <FormControlLabel value={100} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}
