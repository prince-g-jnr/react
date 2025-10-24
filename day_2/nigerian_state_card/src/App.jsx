import StateCard from './components/StateCard';
import './App.css'

function App() {
  return (
    <div>
        <div className="cont">
          <StateCard>
            <h2>Lagos State</h2>
            <h3>Capital: Ikeja</h3>
            <h3>Region: West</h3>
            <h3>Population: 795 thousand</h3>
            <h4>Famous Landmark:</h4>
            <p>Ikeja City Mall</p>
          </StateCard>
        </div>

        <div className="north">
          <StateCard>
            <h2>Sokoto State</h2>
            <h3>Capital: Sokoto</h3>
            <h3>Region: North</h3>
            <h3>Population: 761 thousand</h3>
            <h4>Famous Landmark:</h4>
            <p>Sultan's Palace</p>
          </StateCard>
        </div>

        <div className="east">
          <StateCard>
            <h2>Imo State</h2>
            <h3>Capital: Owerri</h3>
            <h3>Region: East</h3>
            <h3>Population: 5.4 million</h3>
            <h4>Famous Landmark:</h4>
            <p>Akachi Monument</p>
          </StateCard>
        </div>

        <div className="south">
          <StateCard>
            <h2>Edo State</h2>
            <h3>Capital: Benin City</h3>
            <h3>Region: South</h3>
            <h3>Population: 5.25 million</h3>
            <h4>Famous Landmark:</h4>
            <p>Benin Moat</p>
          </StateCard>
        </div>
    </div>
  )
};

export default App;