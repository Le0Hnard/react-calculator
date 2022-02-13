import React, { useState } from 'react'

const Button = (props) => {
  const handleBtnClick = () => {
    switch (props.value) {
      case 'C':
        props.onClrBtnClick();
        break;
      case 'CE':
        props.onClrEntBtnClick();
        break;
      default:
        props.onNumBtnClick(props.value);
    }
  };

  return (
    <>
      <button className={props.classValue} onClick={handleBtnClick}>{props.value}</button>
    </>
  )
}

export default Button;
