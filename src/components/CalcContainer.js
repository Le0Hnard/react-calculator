/* eslint-disable no-eval */
import React, { useState } from 'react';
import DisplayScreen from './DisplayScreen';
import Button from './Button';

let num = "";
let tempNum = "";
// let opsOutput = "";
let expression = [];

export const CalcContainer = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [opsOutput, setOpsOutput] = useState("");

  const handleClickNumbers = (value) => {
    if(tempNum === "E") {
      return false;
    }

    tempNum = "";
    num += Number(value);
    console.log(num);
    setDisplayValue(num);
  };

  const handleOperationClick = (value) => {
    if(tempNum === "E") {
      return false;
    }

    if(value === "x") {
      value = "*";
    }

    if(tempNum !== "") {
      expression.push(tempNum);
      expression.push(value);
      tempNum = "";
    }
  
    if(expression.length === 0 && num === "") {
      expression.push('0');
      expression.push(value);
      setOpsOutput(expression.join(" "));
    }
  
    if(expression.length >= 0 && num !== "") {
      expression.push(displayValue);
      expression.push(value);
    }
  
    num = "";
    setOpsOutput(expression.join(" "));
  };

  const handleComputeAnswer = () => {
    if(displayValue === "E") {
      return;
    }

    expression.push(displayValue);
    let strEval = expression.join(' ');
    let answer = eval(strEval);

    if(answer === Infinity || answer > 999999999999999 ) {
      answer = "E";
    }

    tempNum = answer;
    setDisplayValue(answer);
    setOpsOutput("")
    expression = [];
    num = "";
  };

  const handleClickClear = () => {
    num = "";
    tempNum = "";
    expression = [];
    // opsOutput = "";
    setOpsOutput("");
    setDisplayValue("0");
  };

  const handleClickClearEntry = () => {
    num = "";
    tempNum = "";
    // opsOutput = expression.join(" ");
    setOpsOutput(expression.join(" "));
    setDisplayValue("0");
  };

  return (
    <div className="body-calc">
      <h1>CASINO</h1>
      <DisplayScreen value={displayValue} opsValue={opsOutput} />

      <div className="row">
        <Button classValue="button clear-btns" onClrBtnClick={handleClickClear} value="C" />
        <Button classValue="button clear-btns" onClrEntBtnClick={handleClickClearEntry} value="CE" />
        <Button value="+/-" />
        <Button value="/" onOpBtnClick={handleOperationClick} />
      </div>

      <div className="row">
        <Button value="7" onNumBtnClick={handleClickNumbers} />
        <Button value="8" onNumBtnClick={handleClickNumbers} />
        <Button value="9" onNumBtnClick={handleClickNumbers} />
        <Button value="x" onOpBtnClick={handleOperationClick} />
      </div>

      <div className="row">
        <Button value="4" onNumBtnClick={handleClickNumbers} />
        <Button value="5" onNumBtnClick={handleClickNumbers} />
        <Button value="6" onNumBtnClick={handleClickNumbers} />
        <Button value="-" onOpBtnClick={handleOperationClick} />
      </div>

      <div className="row">
        <Button value="1" onNumBtnClick={handleClickNumbers} />
        <Button value="2" onNumBtnClick={handleClickNumbers} />
        <Button value="3" onNumBtnClick={handleClickNumbers} />
        <Button value="+" onOpBtnClick={handleOperationClick} />
      </div>

      <div className="row">
        <Button value="0" onNumBtnClick={handleClickNumbers} />
        <Button value="." />
        <Button value="=" onEqBtnClick={handleComputeAnswer} />
      </div>
    </div>
  );
};
