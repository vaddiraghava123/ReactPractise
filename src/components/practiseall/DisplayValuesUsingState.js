import React, { useEffect, useState } from 'react';
import DataJson from './DataJson';


function DisplayValuesUsingState() {

 const [values, setValues] = useState([]);

 const [mapValues, setMapValues] = useState(new Map());

 const [currentValue, setCurrentValue] = useState(0);

 const incrementValue = () => {
        const newValue = currentValue + 1;
        setCurrentValue(newValue);
        setValues([...values , newValue]);

        setMapValues( new Map(mapValues).set(newValue,  "Value" + newValue));

}


const jsonData = {
    "title": "Fruits List",
    "fruits": [
      {
        "id": 1,
        "name": "Apple",
        "color": "Red"
      },
      {
        "id": 2,
        "name": "Banana",
        "color": "Yellow"
      },
      {
        "id": 3,
        "name": "Grapes",
        "color": "Green"
      }
    ]
};

const [dataJson, setDataJson] = useState(" ");
const [selectedFruits, setSelectedFruits] = useState([]);

useEffect(() => {
    fetch('./DataJson.json')
    .then((response) => setDataJson(response.json()))
}, []);

const handleSelectFruit = (fruit) => {
    setSelectedFruits((prevSelectedFruits) => {
      if (prevSelectedFruits.includes(fruit)) {
        return prevSelectedFruits.filter((selectedFruit) => selectedFruit !== fruit);
      } else {
        return [...prevSelectedFruits, fruit];
      }
    });
  };

  if (!DataJson) {
    return <div>Loading...</div>;
  }

  
  return (
    <div className="App">
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Value Display Using React</h1>
          <p className="mt-3">Current Value: <span className="badge bg-primary">{values}</span></p>
          <button className="btn btn-success mt-3" onClick={incrementValue}>
            Increment Value
          </button>

         
         <div className="mt-5">
              <h2>List of Values</h2>
              <ul className="list-group">
                {values.map((v, index) => (
                  <li key={index} className="list-group-item">
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h2>Map of Values</h2>
              <ul className="list-group">
                {Array.from(mapValues).map(([key, value]) => (
                  <li key={key} className="list-group-item">
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="container mt-5">
                <div className="row">
                <div className="col-md-12 text-center">
                    <h1>{jsonData.title}</h1>
                    <ul className="list-group">
                    {jsonData.fruits.map((fruit) => (
                        <li key={fruit.id} className="list-group-item">
                        <strong>{fruit.name}</strong>: {fruit.color}
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>

            <div className="col-md-12 text-center">
            <h1> Value is {DataJson.title
                }</h1>
            </div>

            <ul className="list-group">
              {DataJson.fruits.map((fruit) => (
                <li
                  key={fruit.id}
                  className={`list-group-item ${selectedFruits.includes(fruit) ? 'active' : ''}`}
                  onClick={() => handleSelectFruit(fruit)}
                >
                  <strong>{fruit.name}</strong>: {fruit.color}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <h2>Selected Fruits</h2>
              <ul className="list-group">
                {selectedFruits.map((fruit) => (
                  <li key={fruit.id} className="list-group-item">
                    <strong>{fruit.name}</strong>: {fruit.color}
                  </li>
                ))}
              </ul>
            </div>

        </div>
      </div>
    </div>
  </div>
  )
}

export default DisplayValuesUsingState