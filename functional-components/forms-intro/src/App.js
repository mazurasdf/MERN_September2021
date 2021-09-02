import './App.css';
import TraditionalForm from './components/TraditionalForm';
import SimpleForm from './components/SimpleForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <TraditionalForm/> */}
      <SimpleForm />
    </div>
  );
}

export default App;
