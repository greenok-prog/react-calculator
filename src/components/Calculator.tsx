import { useContext, useState } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import CalcButtons from "./CalcButtons";
import Header from "./Header";
export interface IcalcValue {
  sign: string;
  num: number;
  res: number;
}
const Calculator = () => {
  const { theme } = useContext(ThemeContext);
  const [calcValue, setCulcValue] = useState<IcalcValue>({
    sign: "",
    num: 0,
    res: 0,
  });

  return (
    <div className="calculator">
      <Header />
      <input
        className={`input ${theme === "dark" ? "input-dark" : ""}`}
        disabled
        type="text"
        value={calcValue.num ? calcValue.num : calcValue.res}
      />

      <CalcButtons calcValue={calcValue} setCulcValue={setCulcValue} />
    </div>
  );
};

export default Calculator;
