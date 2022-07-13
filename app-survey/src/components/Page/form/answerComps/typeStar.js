import Box from "@mui/material/Box";
import Reating from "@mui/material/Rating";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export const TypeStar = ({
  item,

  valueScore,
  setValueScore,
  hover,
  labels,
  getLabelText
}) => {
  return (
    <Box
      component="div"
      display="inline"
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 10
      }}
    >
      {/* {item2?.questions[indexRecord]?.board?.answers[indexRecord]?.SCORE} */}
      <Reating
        sx={{
          fontSize: 70
        }}
        name="hover-feedback"
        value={valueScore}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValueScore(newValue);
        }}
        emptyIcon={
          <StarOutlineIcon style={{ opacity: 0.55 }} fontSize="inherit" />
        }
      />
      {console.log(valueScore)}
      {valueScore !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : valueScore]}</Box>
      )}
      {/* {console.log(value)} */}
    </Box>
  );
};
