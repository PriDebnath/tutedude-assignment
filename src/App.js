import logo from "./logo.svg";
import "./App.css";
import Router from "./app/route/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
