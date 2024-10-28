import React, { useState } from "react";
export default function UpdateToDoListObject() {
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
    
  const AddCar = () => {
    const newCar = { year, make, model };
    setCars((c) => [...c, newCar]);
    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  };

  const RemoveCar = (index) => {
    setCars((prevCars) => prevCars.filter((_, i) => i !== index));
  };

  const ChangeYear = (e) => {
    setYear(e.target.value);
  };

  const ChangeMake = (e) => {
    setMake(e.target.value);
  };

  const ChangeModel = (e) => {
    setModel(e.target.value);
  };

  return (
    <div>
      <h1>List of Cars Object</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model}
            
            <button onClick={() => RemoveCar(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="number" value={year} onChange={ChangeYear} id="Year" />
      <br />
      <input
        type="text"
        value={make}
        placeholder="Enter make"
        onChange={ChangeMake}
        id="Make"
      />
      <br />
      <input
        type="text"
        value={model}
        placeholder="Enter model"
        onChange={ChangeModel}
        id="Model"
      />
      <br />
      <button onClick={AddCar}>Add Car</button>
    </div>
  );
}
