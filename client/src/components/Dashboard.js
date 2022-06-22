import React from 'react';
import InfoRow from './InfoRow';

const Dashboard = () => {
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
//add loading conditional here
  return (
    <div className="row">
        {createCols()}
    </div>
  )
};

export default Dashboard;