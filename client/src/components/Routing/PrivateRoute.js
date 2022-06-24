// import React, { useContext } from 'react';
// import { Route, useNavigate } from 'react-router-dom';
// import AuthContext from '../../context/Auth/AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const authContext = useContext(AuthContext);
//     const { isAuthenticated, loading } = authContext;
//     const nav = useNavigate();
//     return (
//         <Route { ...rest } render={props => !isAuthenticated && !loading ? (
//             nav('/')
//         ) :
//         <Component {...props} />}/>
//     )
// }

// export default PrivateRoute
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/Auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;
    if(!isAuthenticated && !loading) {
        return (
            <Navigate replace to='/' />
        )
    }else{
        return <Outlet />;
    }
}

export default PrivateRoute;