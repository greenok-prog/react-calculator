import { useContext } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Layout from "./components/Layout";
import { ThemeContext } from "./providers/ThemeProvider";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      {theme === "ligth" ? (
        <img
          onClick={() => setTheme("dark")}
          src="./moon.png"
          alt=""
          className="theme__toggler dark"
        />
      ) : (
        <img
          onClick={() => setTheme("ligth")}
          src="./sun.png"
          alt=""
          className="theme__toggler light"
        />
      )}
      <Layout>
        <Calculator />
      </Layout>
    </div>
  );
}

export default App;
