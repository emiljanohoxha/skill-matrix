import { useState, useEffect } from "react";
import { Form } from "./form/form";

export const Survey = ({
  singleData,
  title,
  questionNumber,
  actions,
  withPadding,
  item,
  itemData,
  handleQuestionDecrement,
  handleQuestionIncrement,
  singleAnswer,
  setValueScore,
  setValueNotes,
  setItemData,
  setQuestionIndex,
  valueScore,
  valueNotes,
  children,
  ...props
}) => {
  const labels = {
    0: "Null",
    1: "Useless",
    2: "Useless+",
    3: "Poor",
    4: "Poor+",
    5: "Ok",
    6: "Ok+",
    7: "Good",
    8: "Good+",
    9: "Excellent",
    10: "Excellent+"
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
      typeof singleData?.answers_by_pk?.SCORE  == "null"
        ? 0
        : singleData?.answers_by_pk?.SCORE 
    );
  }, [singleData]);

  return (
    <div>
      <Form
         title={title}
         questionNumber={questionNumber}
         actions={actions}
         withPadding={withPadding}
         item={item}
         setValueScore={setValueScore}
         valueScore={valueScore}
         valueNotes={valueNotes}
         setValueNotes={setValueNotes}
         setItemData={setItemData}
         itemData={itemData}
         labels={labels}
         setQuestionIndex={setQuestionIndex}
         handleQuestionIncrement={handleQuestionIncrement}
         handleQuestionDecrement={handleQuestionDecrement}
         getLabelText={getLabelText}
         // setHover={setHover}
      />
    </div>
  );
};
