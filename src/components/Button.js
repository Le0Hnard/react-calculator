import React from 'react'

const Button = (props) => {
  const handleBtnClick = () => {
    if(props.value === "C") {
      props.onClrBtnClick();
    } else if(props.value === "CE") {
      props.onClrEntBtnClick();
    } else if(props.value === "+" || props.value === "-" || props.value === "x" || props.value === "/") {
      props.onOpBtnClick(props.value);
    } else if(props.value === "=") {
      props.onEqBtnClick();
    } else if(props.value === "+/-") {
      props.onSignButtonClick();
    } else if(props.value === "0") {
      props.onZeroBtnClick();
    } else if(props.value === ".") {
      props.onPeriodBtnClick(props.value);
    }
    else {
      props.onNumBtnClick(props.value);
    }
  };

  return (
    <>
      {
        props.value === "/" ?
        <button className={props.classValue} onClick={handleBtnClick}>&divide;</button> :
        <button className={props.classValue} onClick={handleBtnClick}>{props.value}</button>
      }
    </>
  )
}

export default Button;
