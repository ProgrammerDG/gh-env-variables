import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  const appEnv = process.env.REACT_APP_ENVIRONMENT;
  const apiUrl = process.env.REACT_APP_API_URL;
  const appVersion = process.env.REACT_APP_VERSION;

  return (
    <div className="container">
      <h1>{time}</h1>
      <p><strong>Environment:</strong> {appEnv}</p>
      <p><strong>API URL:</strong> {apiUrl}</p>
      <p><strong>App Version:</strong> {appVersion}</p>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;


