import React from 'react';
import { useEffect, useContext } from 'react';

import UserDataContext from '../context/UserData/UserDataContext';

const InfoRowTask = ({ taskInfo }) => {
    const { category, name, description, subTasks, tags, priority, isFinished, date } = taskInfo;

    const userDataContext = useContext(UserDataContext);
    const { setCurrentTask } = userDataContext;

    const calcFinished = () => {
        let indexArr = [];
        let count = 0;
        subTasks.map((sub, index) => {
            indexArr.push(index);
            if(sub[1] === 1) {
                count++;
            };
        });
        return `${count}/${indexArr.length}`
    }
    const onClick = () => {
        setCurrentTask(name);
    }
    
  return (
    <ul className="collapsible">
        <li>
            <div className="collapsible-header" ><i className="material-icons">filter_drama</i> {taskInfo === undefined ? '' : name}
                <div>
                    {taskInfo === undefined ? '' : calcFinished()}
                </div> 
            </div>
            <div className="collapsible-body">
                <span>{taskInfo === undefined ? '' : description}</span>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <div>{taskInfo === undefined ? '' : calcFinished()}</div>
                    <div>{taskInfo === undefined ? '' : priority}</div>
                    <a href="#edit-task-modal-2" className='btn-floating modal-trigger green' value="modal" onClick={onClick}><i className='material-icons'>edit</i></a>
                </div>
            </div>
        </li>
    </ul>
  )
}

export default InfoRowTask;