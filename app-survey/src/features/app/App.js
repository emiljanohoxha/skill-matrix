import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Route, Routes } from "react-router-dom";
import { Survey } from "../../components/Page/Survey";

const PING_ACTION_QUERY = gql`
  query MyQuery {
    questions {
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

const GetAnswersByAnswerId = gql`
  query GetAnswerById {
    answers_by_pk(answer_id: 2) {
      answer_id
      NOTES
      SCORE
      data
      user_id
      question_id
    }
  }
`;

const GetAnswersByUserId = gql`
  query GetUserAnswers {
    answers(where: { user_id: { _eq: 1 } }) {
      NOTES
      SCORE
      board_id
      created_at
      updated_at
    }
  }
`;

export const App = () => {
  const { isSuccess, data } = useQuery("MyQuery", PING_ACTION_QUERY);
  const test1 = useQuery("MyQuery1", GetAllQuestionsPlusAnswers);
  // console.log("my data", test1.data);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Page withPadding title={"Survey App"} actions={<Logout />}>
              {isSuccess
                ? `Computer says: ${data.questions[0].data.text}`
                : "loading time..."}
            </Page>
          }
        />
        <Route path="/survey" element={<Survey item={data} item2={test1.data}/>} />
      </Routes>
    </>
  );
};
