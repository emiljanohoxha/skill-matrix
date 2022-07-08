import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StartIcon from "@mui/icons-material/Start";
import TextField from "@mui/material/TextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState, useEffect } from "react";
import Reating from "@mui/material/Rating";

export const Survey = ({
  title,
  actions,
  withPadding,
  item,
  item2,
  singleAnswer,
  children,
  ...props
}) => {
  console.log("itemii 2", singleAnswer);
  const labels = {
    0: "Null",
    10: "Useless",
    20: "Useless+",
    30: "Poor",
    40: "Poor+",
    50: "Ok",
    60: "Ok+",
    70: "Good",
    80: "Good+",
    90: "Excellent",
    100: "Excellent+"
  };
  const indexRecord = 0;
  const [itemData, setItemData] = useState(indexRecord);
  const [itemAnswer, setItemAnswer] = useState(indexRecord);
  const [hover, setHover] = useState(-1);
  const [valueNotes, setValueNotes] = useState("");
  const [value,setValue] = useState("")

  useEffect( ()=> {
    setValue(  singleAnswer?.answers_by_pk?.SCORE/20 == null
      ? 0
      : singleAnswer?.answers_by_pk?.SCORE/20 )
  },[item2])

  console.log("value",value);

  useEffect(() => {
    setValueNotes(
      typeof item2?.questions[indexRecord]?.board?.answers[indexRecord]?.NOTES === "string"
        ? item2?.questions[indexRecord]?.board?.answers[indexRecord]?.NOTES
        : ""
    );
  }, [item2]);
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const handleIncrement = () => {
    itemData < item?.questions?.length - 1
    ? setItemData(itemData + 1)
    : setItemData(itemData);
    // console.log(itemData);
  };

  const handleIncrementAnswer = () => {
    itemAnswer < item2?.answer?.length - 1
      ? setItemAnswer(itemAnswer + 1)
      : setItemAnswer(itemAnswer);
  };
  const handleDecrement = () => setItemData(itemData - 1);

  return (
    <Paper
      {...props}
      sx={{
        marginTop: 15,
        width: "75vw",
        minHeight: "65%",
        backgroundColor: "#a8dadc"
      }}
    >
      <Container>
        <Box
          sx={{
            p: 5
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 5,
              fontSize: 22,
              backgroundColor: "#457b9d",
              color: "white"
            }}
          >
            {item?.questions[itemData].data.text}
          </Box>
        </Box>

        <Box
          component="div"
          display="inline"
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 10
          }}
        >
          {item2?.questions[indexRecord]?.board?.answers[indexRecord]?.SCORE}
          <Reating
            sx={{
              fontSize: 40
            }}
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StartIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
          {console.log(value)}
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 10
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              ml: 5
            }}
          >
            <TextField
              id="outlined-basic"
              label="Notes"
              value={valueNotes}
              multiline
              maxRows={4}
              variant="outlined"
            />
            {console.log(typeof(valueNotes))}
          </Box>
          <Box>
            <ButtonGroup
              disableElevation
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "end",
                mr: 5,
                mt: 2
              }}
            >
              <Button
                onClick={handleDecrement}
                color="primary"
                variant="contained"
                startIcon={<ArrowBackIcon />}
                actions={actions}
                disabled={itemData === 0}
              >
                Prev
              </Button>

              <Button
                onClick={() => {
                  handleIncrement();
                  handleIncrementAnswer();
                }}
                color="primary"
                variant="contained"
                endIcon={<NavigateNextIcon />}
                actions={actions}
              >
                Next
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};
