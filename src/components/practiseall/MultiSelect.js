import React, { useState } from 'react'

const MultiSelect = ({ options }) => {


    const [multiSelectValues, setMultiSelectValues] = useState([]);

    const handleChange = (event) => {
        const dummyArray =[];
        for(let i=0; i< event.target.length; i++) {
            if(event.target[i].selected) {
                dummyArray.push(event.target[i].value);
            }
        }
        setMultiSelectValues(dummyArray);
    }

    return (
        <div>
            <label htmlFor="multi-select">Multi Select:</label>
            <select id="multi-select" multiple value={multiSelectValues} 
                    onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {multiSelectValues.length > 0 && (
                <p>Selected Values: {multiSelectValues.join(', ')}</p>
            )}
        </div>
    )
}

export default MultiSelect