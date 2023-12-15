import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Fotter from './components/layouts/fotter';
import Header from './components/layouts/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <Fotter/>
    </div>
  );
}

export default App;
