import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  const appEnv = process.env.REACT_APP_ENVIRONMENT; // ← Example usage

  return (
    <div className="container">
      <h1>{time}</h1>
      <p>Environment: {appEnv}</p> {/* ← Display the environment */}
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
