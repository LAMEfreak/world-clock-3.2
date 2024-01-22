import Clock from "./Clock.jsx";

const WorldClock = ({ clockData }) => {
  return (
    <>
      {clockData.map((location) => (
        <Clock
          key={crypto.randomUUID()}
          city={location.city}
          timezone={location.timezone}
        />
      ))}
    </>
  );
};
export default WorldClock;
