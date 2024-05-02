import React, { useState } from "react";

import CalJoiner from "../CalJoiner/CalJoiner";

const CalMain = () => {
  const [input, setnewInput] = useState(0);
  const [operation, setNewOpration] = useState(0);
  const [curretOpration, setCurretOpration] = useState("");

  const SetBtnArr = [
    {
      value: "AC",
      btnFunction: () => {
        setCurretOpration("AC");
        setnewInput(0);
      },
    },

    {
      value: " DEL",
      btnFunction: () => {
        setnewInput((prevValue) => {
          const delet = parseInt(prevValue.toString().slice(0, -1));
          return isNaN(delet) ? 0 : delet;
        });
      },
    },
    {
      value: "%",
      btnFunction: () => {
        const newnum = parseInt(input);
        setnewInput(((newnum * operation) / 100).toString());
        // setnewInput((prevValue) => parseInt(prevValue.toString() + "%"));
      },
    },
    {
      value: "x2",
      btnFunction: () => {
        // const root = Math.sqrt(parseInt(input));
        // setnewInput(root.toString());
        const root = parseInt(input);
        setnewInput((root * root).toString());
      },
    },

    {
      value: 0,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 0));
      },
    },
    {
      value: 1,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 1));
      },
    },
    {
      value: 2,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 2));
      },
    },
    {
      value: 3,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 3));
      },
    },
    {
      value: 4,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 4));
      },
    },
    {
      value: 5,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 5));
      },
    },
    {
      value: 6,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 6));
      },
    },
    {
      value: 7,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 7));
      },
    },
    {
      value: 8,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 8));
      },
    },
    {
      value: 9,
      btnFunction: () => {
        setnewInput((prevValue) => parseInt(prevValue.toString() + 9));
      },
    },

    {
      value: ".",
      btnFunction: () => {
        if (!input.includes(".")|| !curretOpration) {
          setnewInput((input + "."));
        } else {
        
        }
      },
    },
  ];

  const setOprationArr = [
    {
      value: "+",
      btnFunction: () => {
        setCurretOpration("+");
        setNewOpration(input);
        setnewInput(0);
      },
    },
    {
      value: "-",
      btnFunction: () => {
        setCurretOpration("-");
        setNewOpration(input);
        setnewInput(0);
      },
    },
    {
      value: "*",
      btnFunction: () => {
        setCurretOpration("*");
        setNewOpration(input);
        setnewInput(0);
      },
    },
    {
      value: "/",
      btnFunction: () => {
        setCurretOpration("/");
        setNewOpration(input);
        setnewInput(0);
      },
    },

    {
      value: "=",
      btnFunction: () => {
        switch (curretOpration) {
          case "+":
            setnewInput((prevValue) => {
              return prevValue + operation;
            });
            break;
          case "-":
            setnewInput((prevValue) => {
              return operation - prevValue;
            });
            break;
          case "*":
            setnewInput((prevValue) => {
              return prevValue * operation;
            });
            break;
          case "/":
            setnewInput((prevValue) => {
              return prevValue / operation;
            });
            break;
          case "x2":
            setnewInput((prevValue) => {
              return Math.sqrt(prevValue);
            });

            break;

          default:
            break;
        }
      },
    },
  ];

  return (
    <div className=" bg-slate-300 text-white flex text-center justify-center items-center h-screen">
      <div className="bg-slate-600 w-56 h-80 rounded-2xl">
        <h1 className="text-xl text-center font-bold hover:bg-cyan-600 rounded-2xl">
          CALCULATOR
        </h1>
       

        {/* <div>first input {input}</div> */}
        <input
          className=" bg-slate-400 p-1 rounded-2xl mt-4"
          value={input}
        ></input>

        <CalJoiner
          SetBtnArr={SetBtnArr}
          setOprationArr={setOprationArr}
        ></CalJoiner>
      </div>
    </div>
  );
};

export default CalMain;
