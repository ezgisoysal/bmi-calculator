import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Diet from "./Diet";
import DietTwo from "./DietTwo";

function Calculation() {
  const [ height, setHeight ] = useState('');
  const [ weight, setWeight ] = useState('');
  const [ status, setStatus ] = useState('');
  const [ bmiResult, setBmiResult ] = useState(null);

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  };

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(status));
  }, [status]);

  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

  return (
    <div className="container">
      <div className="box">
        <h1>BMI Calculator</h1>
        <div className="content">
          <div className="input">
            <label for="height">Height(cm)</label>
            <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="input">
            <label for="weight">Weight(kg)</label>
            <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <Button onClick={calculateBMI}>Calculate BMI</Button>
        </div>
        {bmiResult && (
          <div className="result">
            <p>Your BMI is</p>
            <div id="result">{bmiResult}</div>
            <p className="comment"><b>You are currently :</b> {status}</p>
            {status.toLowerCase() === "underweight" && <Diet/>}
            {status.toLowerCase() === "overweight" && <DietTwo/>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Calculation;