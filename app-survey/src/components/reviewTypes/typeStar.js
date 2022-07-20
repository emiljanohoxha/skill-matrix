import Box from "@mui/material/Box";
import Reating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function TypeStarReview({
  item,
  score,
  setScore,
  index,
  hover,
  labels,
  getLabelText
}) {
  // console.log("score star", score);
  return (
    <Box component="div" display="inline">
      {/* {item2?.questions[indexRecord]?.board?.answers[indexRecord]?.SCORE} */}
      <Reating
        sx={{
          fontSize: 40
        }}
        name="customized-10"
        max={10}
        value={score }
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setScore(newValue, index);
        }}
        emptyIcon={
          <StarOutlineIcon style={{ opacity: 0.55 }} fontSize="inherit" />
        }
      />
      {/* {console.log(valueScore)}
      {valueScore !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : valueScore]}</Box>
      )} */}
      {/* {console.log(value)} */}
    </Box>
  );
}
