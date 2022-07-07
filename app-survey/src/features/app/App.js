import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";

import {  Route, Routes } from "react-router-dom";
import { Survey } from "../../components/Page/Survey";

const PING_ACTION_QUERY = gql`
  query MyQuery {
    questions {
      data,
      type
    }
  }
`;

const query = gql`
query MyQuery1 {
    answers(where: {user_id: {_eq: 1}}) {
      NOTES
      SCORE
      board_id
      created_at
      question_id
      updated_at
      user_id
    }
  }
`;


export const App = () => {
  const { isSuccess,  data } = useQuery("MyQuery", PING_ACTION_QUERY);
  // const test1 = useQuery("MyQuery1", query);
  console.log(data);
  // console.log("my data",test1.data);

  return (
    <>
    <Routes>
      <Route path="/" element={<Page withPadding title={"Survey App"} actions={<Logout />}> 
        {isSuccess
          ? `Computer says: ${data.questions[0].data.text}`
          : "loading time..."}
      </Page>}/>
      <Route path="/survey" element={<Survey item={data} />} />
      
    </Routes>
    </>

  );
};
