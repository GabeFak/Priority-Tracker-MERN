import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { Fragment } from 'react';
import UserDataContext from '../context/UserData/UserDataContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const InfoRowTask = ({ taskInfo }) => {
    const { category, name, description, subTasks, tags, priority, isFinished, date } = taskInfo;
    const userDataContext = useContext(UserDataContext);
    const { setCurrentTask, deleteTask, updateTask, setToStarted } = userDataContext;

    const [updateCagatoryAndIsFinished, setUpdateCagatoryAndIsFinished] = useState({
        category,
        name,
        description,
        subTasks,
        tags,
        priority,
        isFinished,
        date
    });


    useEffect(() => {
        const elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
    }, []);

    const setTaskToStarted = () => {
        setUpdateCagatoryAndIsFinished({...updateCagatoryAndIsFinished, category: 'started'});
        updateTask(updateCagatoryAndIsFinished);
        // setToStarted(name)
    }

    const onDelete = () => {
        deleteTask(name);
    }

    const calcFinished = () => {
        let indexArr = [];
        let count = 0;
        if(subTasks !== '') {
            subTasks.map((sub, index) => {
                indexArr.push(index);
                if(sub[1] === true) {
                    count++;
                };
            });
        }
        return `${count}/${indexArr.length}`
    }

    // if(count === indexArr.length) {
    //     setUpdateCagatoryAndIsFinished({...updateCagatoryAndIsFinished, isFinished: true});
    //     updateTask(updateCagatoryAndIsFinished);
    // }


    const onClick = () => {
        setCurrentTask(name);
    }
    
  return (
    <ul className="collapsible">
        <li>
            <div className="collapsible-header" ><i className="material-icons">filter_drama</i> {taskInfo === undefined ? '' : name}
                <div>{category === "backlog" ? 
                    ""
                :
                    <>
                        {taskInfo === undefined ? '' : calcFinished()}
                    </>
                }
                    
                </div> 
            </div>
            <div className="collapsible-body">
                <span>{taskInfo === undefined ? '' : description}</span>
                <div style={{ display: "flex", flexDirection: "row"}}>


                {category !== "backlog" ? 
                    <>
                        <div>{taskInfo === undefined ? '' : calcFinished()}</div>
                        <div>{taskInfo === undefined ? '' : priority}</div>
                        <div>{taskInfo === undefined ? '' : date}</div>
                        <a href="#edit-task-modal-2" className='btn-floating modal-trigger green' value="modal" onClick={onClick}><i className='material-icons'>edit</i></a>
                    </>
                : 
                    <>
                        <a className='btn-floating red' onClick={onDelete} ><i className='material-icons'>delete</i></a>
                        <a className='btn-floating orange' onClick={setTaskToStarted}><i className='material-icons'>arrow_forward</i></a>
                    </>
                }


                </div>
            </div>
        </li>
    </ul>
  )
}

export default InfoRowTask;