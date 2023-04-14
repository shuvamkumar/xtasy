import logo from './logo.svg';
import './App.scss';
import Homepage from './Components/Homepage';
import Sponsors from './Components/Sponsors';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Homepage />
    <Sponsors />
    </>
  );
}

export default App;
