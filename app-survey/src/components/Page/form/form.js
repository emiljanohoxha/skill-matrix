import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FormComps } from "./formComps/formComps";
import { useQuery, gql } from "../../../services/hasura-client";
import { useEffect } from "react";
import CustomIcons from "./formComps/paginationComp";
import AlignItemsList from "./formComps/paginationComp";

export const Form = ({
  increment,
  decrement,
  questionNumber,
  handleDecrement,
  handleIncrement,
  handleQuestionDecrement,
  handleQuestionIncrement,
  title,
  actions,
  withPadding,
  item,
  valueScore,
  valueNotes,
  itemData,
  indexRecord,
  setQuestionIndex,
  setItemData,
  singleAnswer,
  setValueNotes,
  setValueScore,
  labels,
  getLabelText,
  children,
  ...props
}) => {
  const UnansweredAnswers = gql`
    query GetAllUnansweredAnswers($_eq: Int!) {
      answers_aggregate(where: { SCORE: { _eq: 0 }, user_id: { _eq: $_eq } }) {
        aggregate {
          count(distinct: true)
        }
      }
    }
  `;

  const { error, data, loading, refetch } = useQuery(
    "GetAllUnansweredAnswers",
    UnansweredAnswers,
    {
      enabled: false,

      variables: {
        _eq: 1
      }
    }
  );
  // console.log("questionNumber",questionNumber);/
  const UnansweredQuestions = data?.answers_aggregate?.aggregate?.count;

  const answeredQuestions = questionNumber - UnansweredQuestions;
  // console.log(answeredQuestions)

  useEffect(() => {
    refetch();
  }, [answeredQuestions, refetch]);

  console.log(
    "numberOfUnansweredAnswers",
    data?.answers_aggregate?.aggregate?.count
  );

  console.log("item", item);
  console.log("itemdata", itemData);

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
          questionNumber={questionNumber}
          answeredQuestions={answeredQuestions}
          labels={labels}
          getLabelText={getLabelText}
          itemData={itemData}
          indexRecord={indexRecord}
          valueNotes={valueNotes}
          item={item}
          valueScore={valueScore}
          setValueNotes={setValueNotes}
          // setHover={setHover}
          setValueScore={setValueScore}
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
              onChange={(e) => setValueNotes(e.target.value)}
              multiline
              maxRows={4}
              variant="outlined"
            />
            {/* {console.log(typeof valueNotes)} */}
          </Box>
          <Box>
            <AlignItemsList
              item={item}
              questionNumber={questionNumber}
              setItemData={setItemData}
              setQuestionIndex={setQuestionIndex}
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
                mt: 2,
                mb: 5
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
                onClick={() => {
                  refetch();
                  handleQuestionIncrement();
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
