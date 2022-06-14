import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

import UserDataState from './context/UserData/UserDataState';

function App() {
  return (
    <div className="App">
      <UserDataState>
        <Router>
        <Header />
          <Routes>
            <Route exact path='/' element={<Login />}/>
            <Route exact path='/Register' element={<Register />}/>
            <Route exact path='/Dashboard/:userId' element={<Dashboard />}/>
          </Routes>
        </Router>
      </UserDataState>
    </div>
  );
}

export default App;
