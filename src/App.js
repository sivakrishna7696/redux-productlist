import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import RoutesComp from './components/RoutesComp/RoutesComp';

function App() {
  return (
    <div className="App">
     <Header />
     <RoutesComp />
    </div>
  );
}

export default App;
