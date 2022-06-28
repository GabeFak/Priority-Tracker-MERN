import React from 'react';
import { useEffect, useContext, useState } from 'react';
import UserDataContext from '../context/UserData/UserDataContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../materializeOverride.css';

const InfoRowTask = ({ taskInfo, cat }) => {
    const { category, name, description, subTasks, tags, priority, isFinished, date, _id } = taskInfo;
    const userDataContext = useContext(UserDataContext);
    const { setCurrentTask, deleteTask, updateTask, getTasks, setToStarted } = userDataContext;

    const [updateCagatoryAndIsFinished, setUpdateCagatoryAndIsFinished] = useState({
        _id,
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
        if(updateCagatoryAndIsFinished.category === 'started'){
            updateTask(updateCagatoryAndIsFinished);
        };
    }, [updateCagatoryAndIsFinished]);

    const setTaskToStarted = () => {
        setUpdateCagatoryAndIsFinished({...updateCagatoryAndIsFinished, category: 'started'});
    };

    const onDelete = () => {
        deleteTask(_id);
    };

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
        };
        return [count, indexArr.length];
    };

    const listFinished = () => {
        let finished = calcFinished();
        return `${finished[0]}/${finished[1]}`;
    };

    const onClick = () => {
        setCurrentTask(name);
    };

    const displayDate = () => {
        let dateParts = date.split('-');
        return <div>{`${dateParts[1]}/${dateParts[2].slice(0, 2)}`}</div>
    }

    const setColor = () => {
        switch (cat) {
            case 'backlog':
                return "colour-1"
            case 'started':
                return "colour-2"
            case 'inProgress':
                return "colour-3"
            case 'finished':
                return "colour-4"
            default:
                break;
        };
    };

    const setPriority = () => {
        switch (priority) {
            case 'low':
                return "Low"
            case 'med':
                return "Medium"
            case 'high':
                return "High"
            default:
                break;
        };
    }
    
    return (
        <ul className={`collapsible ${setColor()}`}>
            <li>
                <div className={`collapsible-header box-spacer-3 ${setColor()}`} >
                  
                    {cat === 'backlog' && <i style={{display: "inline"}} className="material-icons info-row-icons">stars</i> }
                    {cat === 'started' && <i style={{display: "inline"}} className="material-icons info-row-icons">star_border</i> }
                    {cat === 'inProgress' && <i style={{display: "inline"}} className="material-icons info-row-icons">star_half</i> }
                    {cat === 'finished' && <i style={{display: "inline"}} className="material-icons info-row-icons">star</i> }
                    
                        {/* taskInfo === undefined ? '' :  */}
                        <div className='task-name'>{name}</div>
                    
                    <div className='calc-finished'>
                        {category === "backlog" ? 
                            ""
                        :
                            <>
                                {listFinished()}
                            </>
                        }
                    </div> 
                </div>
                <div className="collapsible-body">
                    <span className='descript'> <i>Description:</i> {description}</span>
                    <div>
                        {category !== "backlog" ? 
                            <>
                                <div className='shrink box-spacer'>
                                    <div className='media-hide'>{listFinished()}</div>
                                    <div className='media-hide'>{setPriority()}</div>
                                    <div className='media-hide'>{displayDate()}</div>
                                    <a href="#edit-task-modal-2" className='btn-floating modal-trigger green media-space-top' value="modal" onClick={onClick}><i className='material-icons'>edit</i></a>
                                </div>
                            </>
                        : 
                            <>
                                <div className='shrink box-spacer-2'>
                                    <a className='btn-floating red' onClick={onDelete} ><i className='material-icons'>delete</i></a>
                                    <a className='btn-floating orange' onClick={setTaskToStarted}><i className='material-icons'>arrow_forward</i></a>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </li>
        </ul>
    )
};

export default InfoRowTask;