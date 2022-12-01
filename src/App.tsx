import { useContext } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Layout from "./components/Layout";
import moon from "./images/moon.png";
import sun from "./images/sun.png";
import { ThemeContext } from "./providers/ThemeProvider";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      {theme === "ligth" ? (
        <img
          onClick={() => setTheme("dark")}
          src={moon}
          alt=""
          className="theme__toggler dark"
        />
      ) : (
        <img
          onClick={() => setTheme("ligth")}
          src={sun}
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
