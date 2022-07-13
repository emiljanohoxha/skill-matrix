import Box from "@mui/material/Box";
import Reating from "@mui/material/Rating";
import StartIcon from "@mui/icons-material/Start";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Typography } from "@mui/material";
import { TypeStar } from "../answerComps/typeStar";
import CustomizedSlider from "../answerComps/typeSlider";

export const FormComps = ({
  item,
  itemData,
  indexRecord,
  valueNotes,
  valueScore,
  setValueNotes,
  setValueScore,
  hover,
  labels,
  getLabelText,
  questionNumber,
  answeredQuestions
}) => {
  return (
    <>
      <Box
        sx={{
          p: 5
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
            fontSize: 30,
            // backgroundColor: "#457b9d",
            // color: "white"
            fontFamily: "Poppins",
            fontWeight: 600,
            letterSpacing: "3px"
          }}
        >
          {console.log("item", item)}
          {/* {console.log("item2", item2)} */}

          {item?.questions[itemData]?.data?.text}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          mr: 10
        }}
      >
        <Box
          sx={{
            border: "1px solid #457b9d",
            padding: 1
          }}
        >
          <Typography>{`${answeredQuestions} / ${questionNumber} `}</Typography>
        </Box>
      </Box>

      {/* {
        if ()
      } */}

      <CustomizedSlider valueScore={valueScore} setValueScore={setValueScore} />
      {/* <TypeStar valueScore={valueScore}  getLabelText={getLabelText} setValueScore={setValueScore}
     hover={hover}
     labels={labels} 
      />  */}
    </>
  );
};
