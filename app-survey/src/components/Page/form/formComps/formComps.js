import Box from "@mui/material/Box";
import Reating from "@mui/material/Rating";
import StartIcon from "@mui/icons-material/Start";

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
  getLabelText
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
            p: 5,
            fontSize: 22,
            backgroundColor: "#457b9d",
            color: "white"
          }}
        >
          {console.log("item", item)}
          {/* {console.log("item2", item2)} */}

          {item?.questions[itemData]?.data?.text}
        </Box>
      </Box>

      <Box
        component="div"
        display="inline"
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10
        }}
      >
        {/* {item2?.questions[indexRecord]?.board?.answers[indexRecord]?.SCORE} */}
        <Reating
               sx={{
                fontSize: 40
              }}
              name="hover-feedback"
              value={valueScore}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValueScore(newValue);
                 }}
                emptyIcon={<StartIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {console.log(valueScore)}
            {valueScore !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : valueScore]}</Box>
            )}
            {/* {console.log(value)} */}
      </Box>
    </>
  );
};
