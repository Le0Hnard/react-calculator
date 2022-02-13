import React, { useState } from 'react';
import DisplayScreen from './DisplayScreen';
import Button from './Button';

let num = "";

export const CalcContainer = () => {
  const [displayValue, setDisplayValue] = useState(0);
  // const [num, setNum] = useState("");
  const [tempNum, setTempNum] = useState("");
  const [opsOutput, setOpsOutput] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClickNumbers = (value) => {
    if(tempNum === "E") {
      return false;
    }
    setTempNum("");
    num += Number(value);
    console.log(num);
    setDisplayValue(num);
  };

  const handleClickClear = () => {
    num = "";
    setTempNum("");
    setDisplayValue("0");
    setOpsOutput("");
    setExpression([]);
  };

  const handleClickClearEntry = () => {
    num = "";
    setTempNum("");
    setDisplayValue("0");
    setOpsOutput(expression.join(" "));
  };

  return (
    <div className="body-calc">
      <h1>CASINO</h1>
      <DisplayScreen value={displayValue} />

      <div className="row">
        <Button classValue="button clear-btns" onClrBtnClick={handleClickClear} value="C" />
        <Button classValue="button clear-btns" onClrEntBtnClick={handleClickClearEntry} value="CE" />
        <Button value="+/-" />
        <Button value="/" />
      </div>

      <div className="row">
        <Button value="7" onNumBtnClick={handleClickNumbers} />
        <Button value="8" onNumBtnClick={handleClickNumbers} />
        <Button value="9" onNumBtnClick={handleClickNumbers} />
        <Button value="x" />
      </div>

      <div className="row">
        <Button value="4" onNumBtnClick={handleClickNumbers} />
        <Button value="5" onNumBtnClick={handleClickNumbers} />
        <Button value="6" onNumBtnClick={handleClickNumbers} />
        <Button value="-" />
      </div>

      <div className="row">
        <Button value="1" onNumBtnClick={handleClickNumbers} />
        <Button value="2" onNumBtnClick={handleClickNumbers} />
        <Button value="3" onNumBtnClick={handleClickNumbers} />
        <Button value="+" />
      </div>

      <div className="row">
        <Button value="0" onNumBtnClick={handleClickNumbers} />
        <Button value="." />
        <Button value="=" />
      </div>
    </div>
  );
};
