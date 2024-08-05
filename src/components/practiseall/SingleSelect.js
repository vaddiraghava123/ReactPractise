import React, { useState } from 'react'

const SingleSelect = ({ options }) => {

    const [selectedValue, setSelectedValue] = useState(" ");

    console.log("select :: "+ {options});
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <div>
            <label htmlFor="single-select">Single Select:</label>
            <select id="single-select"
                    value={selectedValue}
                    onChange={handleChange}>
                <option value =""> Select an option</option>
                /**  Very Important " () => ()"*/
                {options.map( (option, index) => (
                    <option key={index} value= {option}> 
                        {option}
                    </option>
                ))}    
            </select>

            {selectedValue && <p> Selected Value :: {selectedValue} </p>}
        </div>
    )
}

export default SingleSelect