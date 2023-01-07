import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import Info from './Components/Info';
import CustomForm from './Components/CustomForm';


function App() {
  return (
    <div className="App">
<Counter></Counter>
<Info></Info>
<CustomForm></CustomForm>
    </div>
  );
}

export default App;
