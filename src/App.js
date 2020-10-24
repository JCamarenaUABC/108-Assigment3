import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog/catalog";
import Todo from "./components/todo/toDo";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="container">
        <Catalog></Catalog>
        <hr></hr>
        <Todo></Todo>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
