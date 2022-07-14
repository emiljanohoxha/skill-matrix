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
        name="hover-feedback"
        value={score / 20}
        precision={0.5}
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
