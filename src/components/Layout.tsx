import classNames from "classnames";
import { FC, ReactNode, useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames({
        layout: true,
        dark: theme === "dark",
      })}
    >
      {children}
    </div>
  );
};

export default Layout;
