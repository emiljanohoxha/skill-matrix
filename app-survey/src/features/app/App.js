import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Route, Routes } from "react-router-dom";
import { Survey } from "../../components/Page/Survey";
import { useState } from "react";

const PING_ACTION_QUERY = gql`
  query MyQuery {
    questions {
      question_id
      data
      type
    }
  }
`;

const GetAllQuestionsPlusAnswers = gql`
  query MyQuery {
    questions {
      board_id
      created_at
      type
      question_id
      is_deleted
      data
      board {
        answers(where: { question_id: { _eq: 1 }, user_id: { _eq: 1 } }) {
          NOTES
          SCORE
          board_id
          created_at
          updated_at
        }
      }
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

export const App = () => {
  const test2 = useQuery("MyQuery", PING_ACTION_QUERY);

  const [question_index, setQuestionIndex] = useState(0);
  const [itemData, setItemData] = useState(0);

  const { error, data, loading, refetch } = useQuery(
    "GetAnswerById",
    GetAnswerByAnswerId,
    {
      enabled: false,
      variables: {
        user_id: 1,
        question_id: test2?.data?.questions[question_index]?.question_id
      }
    }
  );

  // console.log("Test 2", test2.data)

  const handleQuestionIncrement = () => {
    if (itemData < test2?.data?.questions?.length - 1) {
      setItemData(itemData + 1);
      setQuestionIndex((question_index) => question_index + 1);
      refetch();
    } else {
      setQuestionIndex((question_index) => question_index);
      refetch();
    }
  };

  const handleQuestionDecrement = () => {
    if (itemData > 0) {
      setItemData((itemData) => itemData - 1);
      setQuestionIndex((question_index) => question_index - 1);
      refetch();
    } else {
      setItemData(itemData);
      setQuestionIndex(question_index);
      refetch();
    }
  };

  // const test1 = useQuery("MyQuery1", GetAllQuestionsPlusAnswers);

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
          element={
            <Survey
              handleQuestionIncrement={handleQuestionIncrement}
              handleQuestionDecrement={handleQuestionDecrement}
              itemData={itemData}
              item={test2.data}
              // item2={test1.data}
              singleData={data}
            />
          }
        />
      </Routes>
    </>
  );
};
