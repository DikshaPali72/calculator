import React from "react";

const Button = (props) => {
  // const btnonclick=() =>{
  //   console.log(props)
  // }

  return (
    <div >
      <button className="bg-red-200 m-2 w-8 rounded-2xl items-center hover:bg-orange-300 text-red-400 font-bold text-sm" onClick={props.btnFunction}> {props.btnName} </button>
    </div>
  );
};

export default Button;
