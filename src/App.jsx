import logo from "/logo.png";
import "./App.css";
import WorldClock from "./components/WorldClock";
import { useState } from "react";
import Selector from "./components/Selector";


function App() {
  // Add new list of timezones to display
  const [timezones, setTimezones] = useState([
    { city: "Singapore", timezone: "Asia/Singapore" },
  ]);

  // Add new timezone to list of timezones
  const handleAddTimezone = (newTimezone) => {
    setTimezones((prevTimezones) => [
      ...prevTimezones,
      newTimezone
    ]);
  };

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <h1>World Clock</h1>
      <p>The default timezone displayed is Singapore (GMT+8).</p>
      <p>Select and add more timezones below.</p>
      <div className="card">
        <WorldClock clockData={timezones} />
      </div>

      <Selector handleAddTimezone={handleAddTimezone} />

      <button
        className="button btn-secondary"
        onClick={() => {
          setTimezones([{ city: "Singapore", timezone: "Asia/Singapore" }]);
        }}
      >
        Reset World Clock
      </button>
    </>
  );
}

export default App;
