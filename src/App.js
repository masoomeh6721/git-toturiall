import { React} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Router from "./Router";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";


function App() {

  return (
    <div className="App">
     <Header/>
     <Router/>
    </div>
  );
}
export default App;
