import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FormComps } from "./formComps/formComps";

export const Form = ({
  increment,
  decrement,
  handleDecrement,
  handleIncrement,
  handleQuestionDecrement,
  handleQuestionIncrement,
  title,
  actions,
  withPadding,
  item,
  value,
  valueNotes,
  itemData,
  indexRecord,
  singleAnswer,
  setValue,
  setHover,
  hover,
  labels,
  getLabelText,
  children,
  ...props
}) => {
  return (
    <Paper
      {...props}
      sx={{
        marginTop: 15,
        width: "75vw",
        minHeight: "75%",
        backgroundColor: "#a8dadc"
      }}
    >
      <Container>
        <FormComps
          item={item}
          labels={labels}
          getLabelText={getLabelText}
          itemData={itemData}
          indexRecord={indexRecord}
          value={value}
          setValue={setValue}
          setHover={setHover}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 1
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
            {/* {console.log(typeof valueNotes)} */}
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
                onClick={handleQuestionDecrement}
                color="primary"
                variant="contained"
                startIcon={<ArrowBackIcon />}
                actions={actions}
                disabled={itemData === 0}
              >
                Prev
              </Button>

              <Button
                onClick={handleQuestionIncrement}
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
