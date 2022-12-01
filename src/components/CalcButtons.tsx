import classNames from "classnames";
import { Dispatch, FC, SetStateAction, useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { buttons, isNumber, isOperator, math } from "../utils";
import { IcalcValue } from "./Calculator";

interface CalcButtonsProps {
  setCulcValue: Dispatch<SetStateAction<IcalcValue>>;
  calcValue: IcalcValue;
}

const CalcButtons: FC<CalcButtonsProps> = ({ setCulcValue, calcValue }) => {
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
    setCulcValue({
      ...calcValue,
      res: 0,
      num: math(+calcValue.res, +calcValue.num, calcValue.sign),
      sign: "",
    });
  };

  const numsClickHander = (el: string) => {
    setCulcValue({
      ...calcValue,
      num:
        calcValue.num !== 0 ? Number(String(calcValue.num + el)) : Number(el),
      res: !calcValue.sign ? 0 : calcValue.res,
    });
  };

  const signClickHandler = (el: string) => {
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
            operator: isOperator(el),
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
