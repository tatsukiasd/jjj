/* eslint react-hooks/exhaustive-deps: off  */
import React, { useEffect, useState } from "react";
import ColofullMessage from "./components/ColofulMessage";
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColofullMessage color="blue">お元気ですか？</ColofullMessage>
      <ColofullMessage color="pink">元気です！</ColofullMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^♪</p>}
    </>
  );
};
export default App;
