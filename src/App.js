import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Login from "./pages/Login";
import Protected from "./Protected";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Protected component={<Main />} />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<Protected component={<About />} />}
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
