import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import './App.css'
function App() {

  return (
    <>
      <Header />
      <main className="main-section">
      <Card/>
      </main>
    </>
  );
}

export default App;
