import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="header">
      <img src="./logo192.png" alt="" />
      <h3
        style={{ color: `${theme === "dark" ? "white" : "rgb(250, 52, 52)"}` }}
      >
        Calc.
      </h3>
    </div>
  );
};

export default Header;
