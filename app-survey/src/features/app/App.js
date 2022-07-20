import { useQuery, gql } from "../../services/hasura-client";
import { useMutation } from "../../services/hasura-client/use-mutation";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Survey } from "../../components/Page/Survey";
import { useState, useEffect } from "react";
import { Review } from "../../components/Page/Review";
import { Link } from 'react-router-dom'


const GetAllQuestions = gql`
  query MyQuery {
    questions {
      question_id
      board_id
      created_at
      data
      is_deleted
      question_type_id
    }
  }
`;

const GetAnswerByAnswerId = gql`
  query GetAnswerById($user_id: Int!, $question_id: Int!) {
    answers_by_pk(user_id: $user_id, question_id: $question_id) {
      NOTES
      SCORE
      answer_id
      board_id
      created_at
      data
      question_id
      updated_at
    }
  }
`;

const SaveAnswer = gql`
  mutation MyMutation(
    $NOTES: String
    $SCORE: Int
    $board_id: Int
    $question_id: Int
    $user_id: Int
    $_eq_user_id: Int
    $_eq1_question_id: Int
  ) {
    insert_answers_one(
      object: {
        NOTES: $NOTES
        SCORE: $SCORE
        user_id: $user_id
        question_id: $question_id
        board_id: $board_id
      }
      on_conflict: {
        constraint: answers_pkey
        update_columns: [SCORE, NOTES]
        where: {
          question_id: { _eq: $_eq1_question_id }
          user_id: { _eq: $_eq_user_id }
        }
      }
    ) {
      SCORE
      NOTES
      answer_id
    }
  }
`;



export const App = () => {
  const navigate = useNavigate();
  const test2 = useQuery("MyQuery", GetAllQuestions);
  const [question_index, setQuestionIndex] = useState(0);
  const [itemData, setItemData] = useState(0);

  //answers input state
  const [valueNotes, setValueNotes] = useState("");
  const [valueScore, setValueScore] = useState(0);

  let questionIdVar = test2?.data?.questions[question_index]?.question_id;

  const { error, data, isLoading,isSuccess, refetch } = useQuery(
    "GetAnswerById",
    GetAnswerByAnswerId,
    {
      enabled: false,
      variables: {
        user_id: 1,
        question_id: questionIdVar
      }
    }
  );

  useEffect(() => {
    refetch();
  }, [isLoading,question_index,refetch]);

  const questionNumber = test2?.data?.questions?.length;
  const [progress, setProgress] = useState("");

  //answers input state
  let typeOfQuestion = test2?.data?.questions[question_index].question_type_id


  const answerMutation = useMutation(SaveAnswer, {
    variables: {
      user_id: 1,
      question_id: test2?.data?.questions[question_index]?.question_id,
      // SCORE: valueScore * 20,
      SCORE: valueScore ,
      // SCORE: typeOfQuestion  === 1 ?  valueScore * 20 : typeOfQuestion  === 2 ? valueScore * 10 : valueScore,
      NOTES: valueNotes,
      _eq1_question_id: test2?.data?.questions[question_index]?.question_id,
      _eq_user_id: 1
    }
  });
  const handleQuestionIncrement = () => {
    if (itemData < test2?.data?.questions?.length - 1) {
      answerMutation.mutate();
      setItemData(itemData + 1);
      setQuestionIndex((question_index) => question_index + 1);
    } else {
      navigate("/review");
      window.location.reload();
    }
  };

  const handleQuestionDecrement = () => {
    if (itemData > 0) {
      answerMutation.mutate();
      setItemData((itemData) => itemData - 1);
      setQuestionIndex((question_index) => question_index - 1);
    } else {
      setItemData(itemData);
      setQuestionIndex(question_index);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Page withPadding title={"Survey App"} actions={<Logout />}>
              {/* {isSuccess
                ? `Computer says: ${data.questions[0].data.text}`
                : "loading time..."} */}
            </Page>
          }
        />
        <Route
          path="/survey"
          element={ isSuccess ?
            <Survey
              questionNumber={questionNumber}
              handleQuestionIncrement={handleQuestionIncrement}
              handleQuestionDecrement={handleQuestionDecrement}
              itemData={itemData}
              item={test2.data}
              setValueNotes={setValueNotes}
              setValueScore={setValueScore}
              valueNotes={valueNotes}
              valueScore={valueScore}
              singleData={data}
              setItemData={setItemData}
              setQuestionIndex={setQuestionIndex}           
            />
          :  "loading time..."
          }
        />
        <Route
          path="/review"
          element={
            <Review
              item={test2.data}
              valueScore={valueScore}
              setValueScore={setValueScore}
            />
          }
        />
      </Routes>
    </>
  );
};
