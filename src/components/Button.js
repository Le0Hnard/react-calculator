import React, { useState } from 'react'

const Button = (props) => {
  const handleBtnClick = () => {
    // switch (props.value) {
    //   case 'C':
    //     props.onClrBtnClick();
    //     break;
    //   case 'CE':
    //     props.onClrEntBtnClick();
    //     break;
    //   case ("+" || "-" || "x" || "/"):
    //     props.onOpBtnClick(props.value);
    //     break;
    //   default:
    //     props.onNumBtnClick(props.value);
    // }

    if(props.value === "C") {
      props.onClrBtnClick();
    } else if(props.value === "CE") {
      props.onClrEntBtnClick();
    } else if(props.value === "+" || props.value === "-" || props.value === "x" || props.value === "/") {
      props.onOpBtnClick(props.value);
    } else if(props.value === "=") {
      props.onEqBtnClick();
    } else {
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
