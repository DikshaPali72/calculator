import React from "react";
import Button from "../Button/Button";

const CalJoiner = (props) => {
  const SetAllBtn = props.SetBtnArr.map((btnObj) => {
    return <Button btnName={btnObj.value} btnFunction={btnObj.btnFunction} />;
  });

  const SetOperationBtn = props.setOprationArr.map((btnObj) => {
    return <Button btnName={btnObj.value} btnFunction={btnObj.btnFunction} />;
  });

  return (
    <div className="flex  flex-wrap justify-center py-6">
     <div className="flex flex-wrap justify-evenly w-40">{SetAllBtn}</div> 
     <div className="item-end" >{SetOperationBtn}</div>
    </div>
  );
};

export default CalJoiner;
