import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Survey = ({
  title,
  actions,
  withPadding,
  item,
  children,
  ...props
}) => {
  //   item?.questions?.map(item => (console.log(item.data.text)));
  const navigate = useNavigate();
  const [itemData, setItemData] = useState(0);

  const handleIncrement = () => {
    console.log(itemData);
    itemData < item.questions.length - 1
      ? setItemData(itemData + 1)
      : setItemData(itemData);
  };

  const handleDecrement = () => setItemData(itemData - 1);

  return (
    <Paper
      {...props}
      sx={{
        marginTop: 15,
        width: "75vw",
        minHeight: "65%"
      }}
    >
      <Container>
        {/* {(title || actions) && <PageTitle actions={actions}>{title}</PageTitle>} */}
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
              border: "2px solid red"
            }}
          >
            {/* { console.log("last data",item.questions)} */}

            {item.questions[itemData].data.text}

            {/* Sometimes, you meet someone, and you just click. You feel like
            you've been besties your entire life and honestly can't believe
            there was a time when you didn't even know they existed. */}
          </Box>
        </Box>

        <Box
          component="div"
          display="inline"
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2
          }}
        >
          asdfljkdsflds
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between"
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
                onClick={handleIncrement}
                // onClick={changeStateQuestion}
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
