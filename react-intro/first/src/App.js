import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';

function App() {
  const otherClick = () => {
    console.log("you clicked one of the maany other boxes!");
  }

  return (
      <div className="App">
        <h1>Hey it's me!</h1>
        <div className="d-flex justify-content-around">
          <div onClick={()=>console.log("hey from the first box!")} className="smallBox"></div>
          <div onClick={otherClick} className="smallBox">
            {8 + 6}
          </div>
          <div onClick={otherClick} className="smallBox">
            8 + 6
          </div>
          <div onClick={otherClick} className="smallBox"></div>
        </div>
        
        <Box color="palevioletred"/>
        <Box color="blue"/>
      </div>
  );
}

export default App;
