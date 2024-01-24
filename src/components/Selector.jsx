import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import sortedClockData from "../clock-data";
import { useState } from "react";
import "../App.css";

function Selector({ handleAddTimezone }) {
  const [selectedTimezone, setSelectedTimezone] = useState({
    city: "",
    timezone: "",
  });

  const handleChange = (e) => {
    const city = e.target.options[e.target.selectedIndex].text;
    setSelectedTimezone({ city: city, timezone: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTimezone(selectedTimezone);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Select
        aria-label="Timezone selector"
        onChange={handleChange}
        value={selectedTimezone.timezone}
        bsPrefix="form-select-new"
      >
        {/* React Bootstrap unable to style select options due to browser limitations */}
        <option value="">Select a timezone</option>
        {sortedClockData.map((location) => (
          <option key={location.city} value={location.timezone}>
            {location.city}
          </option>
        ))}
      </Form.Select>
      <Button variant="primary" type="submit" disabled={selectedTimezone.timezone===""}>
        Add Timezone
      </Button>
    </Form>
  );
}

export default Selector;
