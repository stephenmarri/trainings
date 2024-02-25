import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState({ bg: "warning", color: "light", });
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type, });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (event) => {
    event.preventDefault();
    let selectedColoer = event.target.id;

    switch (selectedColoer.toLowerCase()) {
      case "dark":
        setMode({ bg: "dark", color: "dark", });
        document.body.style.backgroundColor = "#041245";
        document.body.style.color = "white";
        showAlert("Darkmode has been enabled", "Success");
        break;

      case "light":
        setMode({ bg: "secondary", color: "light", });
        document.body.style.backgroundColor = "initial";
        document.body.style.color = "initial";
        event.target.style.border = "1px solid black";
        break;

      case "primary":
        setMode({ bg: "primary", color: "dark", });
        document.body.style.backgroundColor = "#3b7fffe8";
        document.body.style.color = "white";
        event.target.style.border = "1px solid black";
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
