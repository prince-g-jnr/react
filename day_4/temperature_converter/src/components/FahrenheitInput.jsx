function FahrenheitInput({ fahrenheit, onTypeFahrenheit }) {
  return (
    <div className="fahrenheit">
      <label>Fahrenheit: </label>
      <input 
        type="number" 
        value={fahrenheit} 
        onChange={onTypeFahrenheit} 
      />
    </div>
  )
}

export default FahrenheitInput;