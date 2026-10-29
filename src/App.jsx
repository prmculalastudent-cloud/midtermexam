import { useState } from "react";
import "./App.css";

const ZERO_TALENT_MAP = {
  "1": "1 - Being On Time",
  "2": "2 - Making An Effort",
  "3": "3 - Being High Energy",
  "4": "4 - Having A Positive Attitude",
  "5": "5 - Being Passionate",
  "6": "6 - Using Good Body Language",
  "7": "7 - Being Coachable",
  "8": "8 - Doing A Little Extra",
  "9": "9 - Being Prepared",
  "0": "0 - Having A Strong Work Ethic",
};

function CalcDisplay({ dispValue }) {
  return <div className="display">{dispValue}</div>;
}

function CalcButton({ buttonLabel, onClick, className = "" }) {
  return (
    <button className={className} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operation, setOperation] = useState(null);

  const clearHandler = () => {
    setDisp("10 Things That Require Zero Talent");
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
  };

  const operationButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;
    if (operand1 !== null) {
      setOperation(value);
      setDisp(value);
    }
  };

  const equalButtonClickHandler = (e) => {
    e.preventDefault();
    if (operand1 === null || operand2 === null || !operation) return;

    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    let result = 0;

    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "÷") {
      result = num2 === 0 ? "Error" : num1 / num2;
    }

    setDisp(result);
    setOperand1(result === "Error" ? null : String(result));
    setOperand2(null);
    setOperation(null);
  };

  const numButtonClickHandler = (e) => {
    e.preventDefault();
    const value = String(e.target.innerText).trim();

    // Display 10 Things That Require Zero Talent items
    if (ZERO_TALENT_MAP[value]) {
      setDisp(ZERO_TALENT_MAP[value]);
    }

    // Preserve standard calculation logic
    if (operation === null) {
      if (operand1 === null) {
        setOperand1(value);
      } else {
        setOperand1(operand1 + value);
      }
    } else {
      if (operand2 === null) {
        setOperand2(value);
      } else {
        setOperand2(operand2 + value);
      }
    }
  };

  const showSurname = () => {
    setDisp("PHILLIP RAE CULALA");
  };

  const showSubj = () => {
    setDisp("C-PCIT9");
  };

  return (
    <div className="App">
      <div className="Header">
        PHILLIP RAE CULALA - BSIT WMD 3A
        <div className="Calculator">
          <CalcDisplay dispValue={disp} />
          <div className="Keypad">
            <CalcButton buttonLabel={7} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={8} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={9} onClick={numButtonClickHandler} />
            <CalcButton 
              buttonLabel={"÷"} 
              onClick={operationButtonClickHandler} 
              className="btn-op" 
            />

            <CalcButton buttonLabel={4} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={5} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={6} onClick={numButtonClickHandler} />
            <CalcButton 
              buttonLabel={"*"} 
              onClick={operationButtonClickHandler} 
              className="btn-op" 
            />

            <CalcButton buttonLabel={1} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={2} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={3} onClick={numButtonClickHandler} />
            <CalcButton 
              buttonLabel={"-"} 
              onClick={operationButtonClickHandler} 
              className="btn-op" 
            />

            <CalcButton 
              buttonLabel={"C"} 
              onClick={clearHandler} 
              className="btn-clear" 
            />
            <CalcButton buttonLabel={0} onClick={numButtonClickHandler} />
            <CalcButton 
              buttonLabel={"="} 
              onClick={equalButtonClickHandler} 
              className="btn-equal" 
            />
            <CalcButton 
              buttonLabel={"+"} 
              onClick={operationButtonClickHandler} 
              className="btn-op" 
            />
            <CalcButton 
              buttonLabel={"SUBJ"} 
              onClick={showSubj} 
              className="btn-op" 
            />
          </div>

          <button className="surname" onClick={showSurname}>
            NAME
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;