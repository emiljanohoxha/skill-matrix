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
  singleAnswer,
  setValueScore,
  setValueNotes,
  valueScore,
  valueNotes,
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

  useEffect(() => {
    setValueNotes(
      typeof singleData?.answers_by_pk?.NOTES === "string"
        ? singleData?.answers_by_pk?.NOTES
        : ""
    );
  }, [singleData]);

  useEffect(() => {
    setValueScore(
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
         setValueScore={setValueScore}
         valueScore={valueScore}
         valueNotes={valueNotes}
         setValueNotes={setValueNotes}
         itemData={itemData}
         labels={labels}
         handleQuestionIncrement={handleQuestionIncrement}
         handleQuestionDecrement={handleQuestionDecrement}
         getLabelText={getLabelText}
         // setHover={setHover}
      />
    </div>
  );
};
