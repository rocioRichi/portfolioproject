import React from "react";
import AppRouter from "../approuter/approuter";
import { Header } from "../core/header/header";
import { NavMenu } from "../core/navmenu/navmenu";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <NavMenu></NavMenu>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
