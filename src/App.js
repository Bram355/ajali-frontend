import React from "react";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Welcome to Ajali!
        </h1>
        <p className="text-center mt-2 text-gray-600">
          This is your emergency response app.
        </p>
      </main>
    </div>
  );
}

export default App;
