import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StartIcon from "@mui/icons-material/Start";
import TextField from "@mui/material/TextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import Reating from "@mui/material/Rating";

export const Survey = ({
  title,
  actions,
  withPadding,
  item,
  item2,
  children,
  ...props
}) => {
  console.log("itemii 2", item2);
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+"
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const [itemData, setItemData] = useState(0);
  const [itemAnswer, setItemAnswer] = useState(0);

  console.log("answer", item2?.questions_by_pk.board.answers[0]);

  const handleIncrement = () => {
    console.log(itemData);
    itemData < item?.questions?.length - 1
      ? setItemData(itemData + 1)
      : setItemData(itemData);
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
          {/* {item2?.questions_by_pk?.board?.answers[itemAnswer].NOTES} */}
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
              multiline
              maxRows={4}
              variant="outlined"
            />
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
