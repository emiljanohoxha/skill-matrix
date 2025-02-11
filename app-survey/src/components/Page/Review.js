import { useQuery, gql } from "../../services/hasura-client";
import Box from "@mui/material/Box";
import CustomizedSlider from "./form/answerComps/typeSlider";
import ControlledRadioButtonsGroup from "./form/answerComps/typeRadio";
import Paper from "@mui/material/Paper";
import Reating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TypeSliderReview from "../reviewTypes/typeSlider";
import TypeRadioReview from "../reviewTypes/typeRadio";
import TypeStarReview from "../reviewTypes/typeStar";
import { useEffect, useState } from "react";

export const Review = ({ item, valueScore, setValueScore }) => {
  const GetAllAnswers = gql`
  query getAllAnswers($_eq: Int!) {
    answers(where: {user_id: {_eq: $_eq}}, order_by: {question_id: asc}) {
      SCORE
    }
  }
  
  `;

  const submitAnswer = gql`
    mutation MyMutation($_eq: Int) {
      update_answers(
        where: { user_id: { _eq: $_eq } }
        _set: { is_submited: true }
      ) {
        affected_rows
      }
    }
  `;

  const [score, setScore] = useState([]);  
  // console.log("score",score);
  const { isSuccess, data, loading } = useQuery(
    "GetAnswerById",
    GetAllAnswers,
    {
      variables: {
        _eq: 1
      }
    }
    );
    // console.log("data",data);
    
    useEffect(() => {
      setScore(data?.answers);
    }, [data]);
    

    console.log("data",data?.answers)

    console.log("Score",score)

    const changeScore = (value, index) => {
      // console.log(value);
      const tempScore = [...score];
      // console.log("tempscpre",tempScore)
      tempScore[index] = { SCORE: value };
      // console.log("tempscpre",tempScore[index])

      setScore(tempScore);

    };


  const labels = {
    0: "Null",
    1: "Useless",
    2: "Useless+",
    3: "Poor",
    4: "Poor+",
    5: "Ok",
    6: "Ok+",
    7: "Good",
    8: "Good+",
    9: "Excellent",
    10: "Excellent+"
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const getScore = (obj, type) => {
    if (obj && obj.SCORE) {
      let sc=0;
      switch(type) {
        case 'star':
          sc= obj.SCORE ;
          break;
        case 'slider':
          sc= obj.SCORE ;
          break;
        case 'radio':
          sc= obj.SCORE;
          break;
        default:
          sc= 0;
      }      
      // console.log("Sc",sc)
      return sc;
    }
    return 0;
  };
  return (
    <Paper
      sx={{
        // marginTop: 5,
        width: "50vw",
        minHeight: "50%",
        backgroundColor: "#f8edeb"
        // pl: 5,
        // pt: 5
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // mb:2,
          p: 2,
          backgroundColor: "gainsboro"
        }}
      >
        <Typography
          sx={{
            fontFamily: "Didot Modern",
            fontSize: 28
          }}
        >
          Review Survey
        </Typography>
      </Box>

      {item?.questions.map((el, index) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              p: 2,
              pl: 5,

              border: "1px solid #d8e2dc"
            }}
          >
            <Box>
              <Typography fontFamily={"TT Rationalist"} fontSize={20}>
                {el.data.text}
              </Typography>
            </Box>

            {/* <Box>{score[index]}</Box> */}
            {/* {console.log("el", el)}
            {console.log("el me quest", el.question_type_id)} */}

            {/* {console.log("question type",el?.questions[0]?.question_type_id)} */}
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "flex-start",
                mr: 5
              }}
            >
              {el.question_type_id === 1 ? (
                <TypeStarReview
                  index={index}
                  score={score && getScore(score[index], 'star')}
                  setScore={changeScore}
                />
              ) : el.question_type_id === 2 ? (
                <TypeSliderReview
                  index={index}
                  score={score && getScore(score[index], 'slider')}
                  setScore={changeScore}
                />
              ) : (
                <TypeRadioReview
                  index={index}
                  score={score && getScore(score[index], 'radio')}
                  setScore={changeScore}
                />
              )}
            </Box>
          </Box>
        );
      })}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          backgroundColor: "gainsboro"
        }}
      >
        <Button
          //  onClick={() => {
          //   refetch();
          //   handleQuestionDecrement();

          // }}
          color="success"
          variant="contained"
          // startIcon={<ArrowBackIcon />}
          // actions={actions}
          // disabled={itemData === 0}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
};
