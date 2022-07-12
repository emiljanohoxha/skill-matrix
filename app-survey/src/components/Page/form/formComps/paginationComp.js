import * as React from "react";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
export default function AlignItemsList({
  item,
  questionNumber,
  setItemData,
  setQuestionIndex
}) {
  console.log("quest erald", questionNumber);
  const handleChangePage = (e, n) => {
    console.log("n", n);
    setItemData(n);
    setQuestionIndex(n);
  };
  return (
    <Container fixed>
      <Box>
        <Pagination
          count={questionNumber} //length of questions
          variant="outlined"
          color="primary"
          shape="rounded"
          defaultPage={1} //question_id[0]
          sx={{
            display: "flex",
            justifyContent: "center",
            ml: 2
          }}
          onChange={(e, n) => handleChangePage(e, n)}
        />
      </Box>
    </Container>
  );
}
