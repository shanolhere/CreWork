import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Recipe from "./components/Recipe";
import Search from "./components/Search";
import { useEffect } from "react";
import { DataContextProvider } from "./context/DataContext";
import { DataContext } from "./context/DataContext";
import { useContext, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </DataContextProvider>
    </div>
  );
}
