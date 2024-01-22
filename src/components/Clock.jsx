import { useEffect, useState } from "react";

function Clock({ city, timezone }) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // Update the date every second
    const timer = setInterval(() => setDate(new Date()), 1000);

    // Cleanup function if component is unmounted
    return () => clearInterval(timer);

    // Run the effect whenever state variable changes
  }, [date]);

  return (
    <>
      <p style={{ fontSize: "20px" }}>
        <strong style={{ color: "lightblue", marginRight: "8px" }}>
          {city}:
        </strong>{" "}
        {date.toLocaleString("en-GB", { timeZone: timezone })}
      </p>
    </>
  );
}

export default Clock;
