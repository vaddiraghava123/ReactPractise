import React from 'react'

function TwowayBinding({value, onInputChange}) {

const handleChange = (event) => {
    onInputChange(event.target.value);
}
  return (
    <div>

    <input
        type="text"
        value={value}
        onChange={handleChange}
        className="form-control"
      />
    </div>


  )
}

export default TwowayBinding