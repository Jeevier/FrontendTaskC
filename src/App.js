import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import './App.css'
function App() {
  React.useEffect(() => {
    fetch('https://api.codedigger.tech/auth/profile/shivamsinghal1012/?platform=codeforces')
    .then(res=> res.json())
    .then(data=> console.log(data));
  });

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
