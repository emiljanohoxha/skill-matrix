
import { useState, useEffect } from "react";
import { Form } from "./form/form";


export const Survey = ({
  title,
  actions,
  withPadding,
  item,
  item2,
  singleAnswer,
  children,
  ...props
}) => {

  const labels = {
    0: "Null",
    10: "Useless",
    20: "Useless+",
    30: "Poor",
    40: "Poor+",
    50: "Ok",
    60: "Ok+",
    70: "Good",
    80: "Good+",
    90: "Excellent",
    100: "Excellent+"
  };
  const [hover, setHover] = useState(-1);

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  console.log("itemii 2", singleAnswer);

  const indexRecord = 0;
  const [itemData, setItemData] = useState(indexRecord);

  const [valueNotes, setValueNotes] = useState("");
  const [value,setValue] = useState("")



  console.log("value",value);

  useEffect(() => {
    setValueNotes(
      typeof item2?.questions[indexRecord]?.board?.answers[indexRecord]?.NOTES === "string"
        ? item2?.questions[indexRecord]?.board?.answers[indexRecord]?.NOTES
        : ""
    );
  }, [item2]);
  
  useEffect( ()=> {
    setValue(
      singleAnswer?.answers_by_pk?.SCORE/20 == null
      ? 0
      : singleAnswer?.answers_by_pk?.SCORE/20 );
  }, [item2])


  const handleIncrement = () => {
    itemData < item?.questions?.length - 1
    ? setItemData(itemData + 1)
    : setItemData(itemData);
    // console.log(itemData);
  };

  const handleDecrement = () => setItemData(itemData - 1);

  return (
   <div>
    <Form handleIncrement={handleIncrement}
     handleDecrement={handleDecrement} 
     item2={item2} 
     title={title} 
     actions={actions} 
     withPadding={withPadding} 
     item={item}
     setValue={setValue}
     value={value}
     valueNotes={valueNotes}
     itemData={itemData}
     indexRecord={indexRecord}
     labels={labels}
     getLabelText={getLabelText}
     setHover={setHover}
     />
   </div>
  );
};
