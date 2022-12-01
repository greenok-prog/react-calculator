import classNames from "classnames";
import { Dispatch, FC, SetStateAction, useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { IcalcValue } from "./Calculator";

interface CalcButtonsProps {
  setCulcValue: Dispatch<SetStateAction<IcalcValue>>;
  calcValue: IcalcValue;
}
const buttons = [
  ["C", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  [".", "0", "="],
];
const CalcButtons: FC<CalcButtonsProps> = ({ setCulcValue, calcValue }) => {
  console.log(calcValue);

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const isNumber = (el: string) => numbers.includes(el);
  const operators = ["%", "/", "*", "+", "-"];
  const { theme } = useContext(ThemeContext);
  const clearClickHandler = () => {
    setCulcValue({ num: 0, sign: "", res: 0 });
  };
  const changeSignHandler = () => {
    setCulcValue({
      ...calcValue,
      num: calcValue.num && -calcValue.num,
      res: !calcValue.num && calcValue.res ? -calcValue.res : calcValue.res,
    });
  };
  const addDotHandler = (el: any) => {
    setCulcValue({
      ...calcValue,
      num: !calcValue.num.toString().includes(".")
        ? calcValue.num + el
        : calcValue.num,
    });
  };
  const equalClickHandler = () => {
    const math = (a: number, b: number, sign: string) =>
      sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "*"
        ? a * b
        : sign === "%"
        ? a % b
        : a / b;
    setCulcValue({
      ...calcValue,
      res: 0,
      num: math(+calcValue.res, +calcValue.num, calcValue.sign),
      sign: "",
    });
  };
  const numsClickHander = (el: any) => {
    setCulcValue({
      ...calcValue,
      num:
        calcValue.num !== 0 ? Number(String(calcValue.num + el)) : Number(el),
      res: !calcValue.sign ? 0 : calcValue.res,
    });
  };
  const signClickHandler = (el: any) => {
    setCulcValue({
      ...calcValue,
      num: 0,
      sign: el,
      res: !calcValue.res && calcValue.num ? calcValue.num : calcValue.res,
    });
  };
  const buttonVariables = (btn: string) => {
    if (
      btn === "/" ||
      btn === "*" ||
      btn === "-" ||
      btn === "+" ||
      btn === "%"
    ) {
      signClickHandler(btn);
    } else if (btn === "=") {
      equalClickHandler();
    } else if (btn === "C") {
      clearClickHandler();
    } else if (btn === "+/-") {
      changeSignHandler();
    } else if (btn === ".") {
      addDotHandler(btn);
    } else {
      numsClickHander(btn);
    }
  };
  return (
    <div className="dashboard">
      {buttons.flat().map((el, i) => (
        <button
          className={classNames({
            button: true,
            equals: el === "=",
            number: isNumber(el),
            "number-dark": isNumber(el) && theme === "dark",
            operator: operators.includes(el),
          })}
          key={i}
          onClick={() => buttonVariables(el)}
          name={el}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default CalcButtons;
