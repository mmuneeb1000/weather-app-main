import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
