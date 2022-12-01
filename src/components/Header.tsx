import { FC, useContext } from "react";
import logo from "../images/logo192.png";
import { ThemeContext } from "../providers/ThemeProvider";

const Header: FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h3
        style={{ color: `${theme === "dark" ? "white" : "rgb(250, 52, 52)"}` }}
      >
        Calc.
      </h3>
    </div>
  );
};

export default Header;
