import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";

import {  Route, Routes } from "react-router-dom";
import { Survey } from "../../components/Page/Survey";

const PING_ACTION_QUERY = gql`
  query MyQuery {
    questions {
      data
    }
  }
`;

export const App = () => {
  const { isSuccess,  data } = useQuery("MyQuery", PING_ACTION_QUERY);
  console.log(data);
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
