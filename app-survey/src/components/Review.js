export const Review = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item?.questions.map((el) => {
        return <div>{el.data.text}</div>;
      })}
    </div>
  );
};
