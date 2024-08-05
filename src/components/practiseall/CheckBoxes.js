// Checkboxes.js
import React, { useState } from 'react';

function Checkboxes() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      <h2>Select fruits</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="Apple"
            checked={selectedOptions.includes("Apple")}
            onChange={handleCheckboxChange}
          />
          Apple
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Banana"
            checked={selectedOptions.includes("Banana")}
            onChange={handleCheckboxChange}
          />
          Banana
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Grapes"
            checked={selectedOptions.includes("Grapes")}
            onChange={handleCheckboxChange}
          />
          Grapes
        </label>
      </div>
      <div>
        Selected options: {selectedOptions.join(", ")}
      </div>
    </div>
  );
}

export default Checkboxes;
