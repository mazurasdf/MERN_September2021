
import './App.css';
import ClassBox from './components/ClassBox';
import FunctionBox from './components/FunctionBox';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Class Component Here</h1>
        <ClassBox message="am I superior component??" likes={2} />
      </div>

      <div>
        <h1>Functional Component Here</h1>
        <FunctionBox message="behold the greater component" likes={17000} />
      </div>
    </div>
  );
}

export default App;
