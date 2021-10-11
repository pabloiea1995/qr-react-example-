import React from "react";
import "./App.css";
import QrCodeReader from "./QrCodeReader";
import "./bootstrap.min.css";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <QrCodeReader />
    </div>
  );
}

export default App;
