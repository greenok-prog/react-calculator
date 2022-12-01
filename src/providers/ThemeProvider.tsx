import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ThemeContextProps {
  children: ReactNode;
}
interface IContext {
  theme: "dark" | "ligth";
  setTheme: Dispatch<SetStateAction<"dark" | "ligth">>;
}

export const ThemeContext = createContext<IContext>({} as IContext);
const ThemeProvider: FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "ligth">("ligth");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
