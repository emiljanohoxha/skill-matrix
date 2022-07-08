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
  const questionID = 1;
  const userID = 1;
  const { isSuccess, data } = useQuery("MyQuery", PING_ACTION_QUERY);
  const test1 = useQuery("MyQuery1", GetAllQuestionsPlusAnswers);
  const test2 = useQuery("GetAnswerById", GetAnswerByAnswerId,  {variables:{question_id:questionID,user_id:userID}});
  console.log("my data", test2);
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
        <Route path="/survey" element={<Survey item={data} item2={test1.data} singleAnswer={test2.data}/>} />
      </Routes>
    </>
  );
};
