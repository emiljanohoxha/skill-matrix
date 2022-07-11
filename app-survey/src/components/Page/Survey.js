import { useState, useEffect } from "react";
import { Form } from "./form/form";

export const Survey = ({
  singleData,
  title,
  actions,
  withPadding,
  item,
  itemData,
  handleQuestionDecrement,
  handleQuestionIncrement,
  // item2,
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

  const [valueNotes, setValueNotes] = useState("");
  const [value, setValue] = useState("");

  console.log(singleData);
  console.log("itemii 2", singleData?.answers_by_pk?.SCORE);

  // console.log("value",value);
  // console.log(item2?.questions[indexRecord]?.board?.answers[indexRecord]?.NOTES)

  useEffect(() => {
    setValueNotes(
      typeof singleData?.answers_by_pk?.NOTES === "string"
        ? singleData?.answers_by_pk?.NOTES
        : ""
    );
  }, [singleData]);

  useEffect(() => {
    setValue(
      typeof singleData?.answers_by_pk?.SCORE / 20 == "null"
        ? 0
        : singleData?.answers_by_pk?.SCORE / 20
    );
  }, [singleData]);

  return (
    <div>
      <Form
        title={title}
        actions={actions}
        withPadding={withPadding}
        item={item}
        setValue={setValue}
        value={value}
        valueNotes={valueNotes}
        itemData={itemData}
        //  indexRecord={indexRecord}
        labels={labels}
        handleQuestionIncrement={handleQuestionIncrement}
        handleQuestionDecrement={handleQuestionDecrement}
        getLabelText={getLabelText}
        setHover={setHover}
      />
    </div>
  );
};
