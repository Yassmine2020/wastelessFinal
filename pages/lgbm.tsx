import predict from "../model/lgbm";

export default function Test5() {
  const input = [246, 17.36, 2012, 9, 16, 13];
  console.log(input);
  const prediction = predict(input);
  console.log(prediction);
  return <div>Enter</div>;
}
