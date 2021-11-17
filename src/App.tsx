import "./App.scss";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Main>
      </div>
    </Router>
  );
}

export default App;
