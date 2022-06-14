import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import UpdateTaskModal from './components/modals/UpdateTaskModal';

import UserDataState from './context/UserData/UserDataState';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    M.AutoInit();
  })
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
          <UpdateTaskModal />
        </Router>
      </UserDataState>
    </div>
  );
}

export default App;
