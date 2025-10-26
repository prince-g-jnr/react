function CelsiusDisplay({ celsius }) {
  return (
    <h1>
      Celsius: {celsius ? `${celsius}°C` : ""}
    </h1>
  );
}

export default CelsiusDisplay;