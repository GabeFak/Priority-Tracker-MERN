//dependencies
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

//modals
import UpdateTaskModal from './components/modals/UpdateTaskModal';
import UpdateTaskModal2 from './components/modals/UpdateTaskModal2';
import NewTaskBacklogModal from './components/modals/NewTaskBacklogModal';
import AddNewTaskStartedModal from './components/modals/AddNewTaskStartedModal';

//context
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
          {/* <UpdateTaskModal /> */}
          <UpdateTaskModal2 />
          <NewTaskBacklogModal />
          <AddNewTaskStartedModal />
        </Router>
      </UserDataState>
    </div>
  );
}

export default App;
