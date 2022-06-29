//dependencies
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import './AppScaleLarge.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import setAuthToken from './Utils/setAuthToken';

//components
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

//modals
import UpdateTaskModal2 from './components/modals/UpdateTaskModal2';
import NewTaskBacklogModal from './components/modals/NewTaskBacklogModal';
import AddNewTaskStartedModal from './components/modals/AddNewTaskStartedModal';

//context
import UserDataState from './context/UserData/UserDataState';
import AuthState from './context/Auth/AuthState';
import AlertState from './context/Alert/AlertState';

//private route
import PrivateRoute from './components/Routing/PrivateRoute';

if(localStorage.token) {
  setAuthToken(localStorage.token);
};

function App() {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <AlertState>
        <AuthState>
          <UserDataState>
              <Router>
                <Header />
                  <Routes>
                    <Route exact path='/' element={<Login />}/>
                    <Route exact path='/Register' element={<Register />}/>
                    <Route path="/Dashboard" element={<PrivateRoute />}>
                      <Route path="/Dashboard" element= {<Dashboard />}/>
                    </Route>
                  </Routes>
                  <UpdateTaskModal2 />
                  <NewTaskBacklogModal />
                  <AddNewTaskStartedModal />
              </Router>
          </UserDataState>
        </AuthState>
      </AlertState>
    </div>
  )
};

export default App;
