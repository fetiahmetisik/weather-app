import './App.css';
import Home from './Components/Home/Home';
import { WeatherProvider } from "../src/Context/weatherContext"

function App() {
  return (
    <div className='App'>
      <WeatherProvider>
        <Home/>
      </WeatherProvider> 
    </div>
  );
}

export default App;