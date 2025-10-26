import { useState } from "react";
import CelsiusDisplay from "./CelciusDisplay.jsx";
import CelsiusInput from "./CelciusInput.jsx";
import FahrenheitDisplay from "./FahrenheitDisplay.jsx";
import FahrenheitInput from "./FahrenheitInput";

function TemperatureApp() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function handleCelsiusChange(e) {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      return;
    }
    const converted = (parseFloat(value) * 9 / 5) + 32;
    setFahrenheit(converted.toFixed(2));
  }

  function handleFahrenheitChange(e) {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      return;
    }
    const converted = (parseFloat(value) - 32) * 5 / 9;
    setCelsius(converted.toFixed(2));
  }

  return (
    <div className="container">
      <h1 className="text">Temperature Converter</h1>

      <CelsiusInput 
        celsius={celsius} 
        onTypeCelsius={handleCelsiusChange} 
      />
      <CelsiusDisplay celsius={celsius} />

      <FahrenheitInput 
        fahrenheit={fahrenheit} 
        onTypeFahrenheit={handleFahrenheitChange} 
      />
      <FahrenheitDisplay fahrenheit={fahrenheit} />
    </div>
  )
}

export default TemperatureApp;