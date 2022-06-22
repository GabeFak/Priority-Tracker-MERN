import React from 'react';
import InfoRow from './InfoRow';
import { useContext } from 'react';
import UserDataContext from '../context/UserData/UserDataContext';

const Dashboard = () => {
    const userDataContext = useContext(UserDataContext);
    const { setLaoding } = userDataContext;
    const createCols = () => {
        const cols = []
        for(let i = 0; i < 4; i++) {
            let catagory;
            if(i === 0) {
                catagory = 'backlog';
            } else if(i === 1) {
                catagory = 'started';
            } else if(i === 2) {
                catagory = 'inProgress';
            } else if(i === 3) {
                catagory =  'finished';
            };
            cols.push(<div key={i}><InfoRow id={i} cat={catagory}/></div>);
        };
        return cols;
    };
    if( setLaoding ) {
        return '';
    } else {
        return (
            <div className="row">
                {createCols()}
            </div>
        )
    };
};

export default Dashboard;