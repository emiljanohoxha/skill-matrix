import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Route, Routes } from "react-router-dom";
import { Survey } from "../../components/Page/Survey";
import { useEffect, useRef, useState } from "react";
import { Sand } from "../../components/Page/sand";

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

// const GetAnswersByUserId = gql`
//   query GetUserAnswers {
//     answers(where: { user_id: { _eq: 1 } }) {
//       NOTES
//       SCORE
//       board_id
//       created_at
//       updated_at
//     }
//   }
// `;


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export const App = () => {

  const [question_id, setQuestion_id] = useState(0);
  const previousLimit = usePrevious(question_id);

  const { error, data, loading, refetch } = useQuery("GetAnswerById", GetAnswerByAnswerId, {
    // refetchOnWindowFocus: false,
    enabled: false,
    variables: {
      user_id: 1,
      question_id
    }
  });

  const increment = () => {
    setQuestion_id(question_id + 1)
    refetch();
  }
  const decrement = () => {
    setQuestion_id(question_id - 1);
    refetch();

  };
  const reset = () => {
    setQuestion_id(1);
  };

  console.log("state of question_id :", question_id);
  console.log("graphql question_id :", data);

  const showDataWhileLoading = previousLimit < question_id;
  let updatedData = !loading || showDataWhileLoading ? data : undefined;


  const test2 = useQuery("MyQuery", PING_ACTION_QUERY);
  const test1 = useQuery("MyQuery1", GetAllQuestionsPlusAnswers);


  return (
    <>
      <Routes>
        {/* <Route
          path="/"
          element={
            <Page withPadding title={"Survey App"} actions={<Logout />}>
              {isSuccess
                ? `Computer says: ${data.questions[0].data.text}`
                : "loading time..."}
            </Page>
          }
        /> */}
        <Route path="/sand" element={<Sand />} />
        <Route path="/survey"  element={<Survey 
        increment={increment}
        decrement={decrement}
        item={test2.data} 
        item2={test1.data} 
    
        />} />
      </Routes>
    </>
  );
};
