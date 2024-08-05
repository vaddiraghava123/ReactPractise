// RadioButtons.js
import React, { useState } from 'react';

function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Choose a fruit</h2>
      <div>
        <label>
          <input
            type="radio"
            value="Apple"
            checked={selectedOption === "Apple"}
            onChange={handleOptionChange}
          />
          Apple
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Banana"
            checked={selectedOption === "Banana"}
            onChange={handleOptionChange}
          />
          Banana
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Grapes"
            checked={selectedOption === "Grapes"}
            onChange={handleOptionChange}
          />
          Grapes
        </label>
      </div>
      <div>
        Selected option: {selectedOption}
      </div>
    </div>
  );
}

export default RadioButtons;
