import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Daily from "./components/Daily";
import Hourly from "./components/Hourly";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Cards />
      <Daily />
      <Hourly />
      <Footer />
    </>
  );
}

export default App;
