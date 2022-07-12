

import Box from "@mui/material/Box";
import Reating from "@mui/material/Rating";
import StartIcon from "@mui/icons-material/Start";

export const FormComps = ({
  item,
  itemData,
  item2,
  indexRecord,
  value,
  setValue,
  setHover,
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
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StartIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
        {/* {console.log(value)} */}
      </Box>
    </>
  );
};
