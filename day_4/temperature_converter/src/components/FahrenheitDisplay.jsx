function FahrenheitDisplay({ fahrenheit }) {
  return (
    <h1>
      Fahrenheit: {fahrenheit ? `${fahrenheit}°F` : ""}
    </h1>
  );
}

export default FahrenheitDisplay;