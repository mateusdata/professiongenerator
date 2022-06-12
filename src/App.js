import React from "react";
import "./App.css";
import PaginaInicial from "./components/homePage/App";
import Header from "./components/header/app";
import Footer from "./components/footer/App";

export default function page(){

  return(
    <div className="main">
      <Header/>
      <PaginaInicial/>
      <Footer/> 
    </div>
  );
}