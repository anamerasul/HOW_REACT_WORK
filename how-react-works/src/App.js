import logo from './logo.svg';
import './App.css';
import Device from './Component/Device/Device';
import Watch from './Component/Watch/Watch';
import Tablet from './Component/Tablet/Tablet';

function App() {
  return (
    <div className="App">
    <Device name="uphone" price="13000tk" ram="13gb"></Device>

    <Watch></Watch>
    <Tablet></Tablet>
    </div>
  );
}

export default App;
