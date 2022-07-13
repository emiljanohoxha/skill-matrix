import { useQuery, gql } from "../../services/hasura-client";
import Box from "@mui/material/Box";
import CustomizedSlider from "./form/answerComps/typeSlider";
import ControlledRadioButtonsGroup from "./form/answerComps/typeRadio";
import Paper from "@mui/material/Paper";
import Reating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Button from "@mui/material/Button";

export const Review = ({ item, valueScore, setValueScore }) => {
  const GetAllAnswers = gql`
    query getAllAnswers($_eq: Int!) {
      answers(where: { user_id: { _eq: $_eq } }) {
        SCORE
      }
    }
  `;
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

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const { error, data, loading } = useQuery("GetAnswerById", GetAllAnswers, {
    variables: {
      _eq: 1
    }
  });

  console.log(data);

  console.log(item);
  return (
    <Paper
      sx={{
        marginTop: 1,
        width: "50vw",
        minHeight: "500px",
        backgroundColor: "#f4978e",
        pl: 5,
        pt: 5
      }}
    >
      {item?.questions.map((el, index) => {
        return (
          <div
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {el.data.text}
            <Box>{data?.answers[index].SCORE}</Box>
            {console.log("el", el)}
            {console.log("el me quest", el.question_type_id)}

            {/* {console.log("question type",el?.questions[0]?.question_type_id)} */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              {el.question_type_id === 1 ? (
                //  <TypeStar valueScore={data?.answers[index].SCORE} setValueScore={setValueScore} item={item}
                <Box component="div" display="inline">
                  {/* {item2?.questions[indexRecord]?.board?.answers[indexRecord]?.SCORE} */}
                  <Reating
                    sx={{
                      fontSize: 40
                    }}
                    name="hover-feedback"
                    value={valueScore}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValueScore(newValue);
                    }}
                    emptyIcon={
                      <StarOutlineIcon
                        style={{ opacity: 0.55 }}
                        fontSize="inherit"
                      />
                    }
                  />
                </Box>
              ) : el.question_type_id === 2 ? (
                <CustomizedSlider />
              ) : (
                <ControlledRadioButtonsGroup />
              )}
            </Box>
          </div>
        );
      })}
      <Button
        //  onClick={() => {
        //   refetch();
        //   handleQuestionDecrement();

        // }}
        color="primary"
        variant="contained"
        // startIcon={<ArrowBackIcon />}
        // actions={actions}
        // disabled={itemData === 0}
      >
        Submit
      </Button>
    </Paper>
  );
};
