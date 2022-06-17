
import React, { useState, useContext, useEffect} from 'react';
import UserDataContext from '../../context/UserData/UserDataContext';
import UpdateTaskModelSubItem from './UpdateTaskModelSubItem';
import Chips from './modalSubComponents/Chips';

const UpdateTaskModal = () => {
// I belive the issue has to do with something retriggering inside of the modal once clearCurrentTask is called
    const [taskUpdate, setTaskUpdate] = useState({
        category: '',
        name: '',
        description: '',
        subTasks: '',
        tags: [],
        priority: '',
        isFinished: '',
        date: ''
    });

    // console.log(taskUpdate.date)

    const userDataContext = useContext(UserDataContext);
    const { currentTask, clearCurrentTask, updateTask, deleteTask} = userDataContext;

    // const [subTasks, setSubtasks] = useState();

    // const setSubTasksToTaskUpdate = () => {
    //     let subs = [...subTasks];
    //     setTaskUpdate({...taskUpdate, subTasks: subs});
    //     return taskUpdate;
    // }

    const onDelete = () => {
        deleteTask(currentTask.name);
    }

    const onSubmit = () => {
        
        // let subs = [...subTasks];
        // setTaskUpdate({...taskUpdate, subTasks: subs});
        // console.log(setSubTasksToTaskUpdate());
        updateTask(taskUpdate);
        // console.log(taskUpdate);
    }

    useEffect(() => {

        //this needs a set timeout 
        if(currentTask !== null) {
            // setSubtasks(null)
            setTaskUpdate({...taskUpdate, name: currentTask.name, description: currentTask.description, isFinished: currentTask.isFinished, priority: currentTask.priority, tags: currentTask.tags, category: currentTask.category, subTasks: currentTask.subTasks, date: currentTask.date});
            // let foo = currentTask.subTasks
            // setSubtasks(foo);
        }

        // console.log(taskUpdate)
        // console.log(subTasks)
    }, [ currentTask, setTaskUpdate]);

    // console.log(taskUpdate)
    const newSubTask = () => {
        // setSubtasks([...subTasks, ['', 0]]);
        setTaskUpdate({...taskUpdate, subTasks: [...taskUpdate.subTasks, ['', 0]]});
        loopThroughSubTasks();
    }

    const loopThroughSubTasks = () => {
        let subContent = [];

        // const ittr = [...subTasks];
        const ittr = [...taskUpdate.subTasks];
        ittr.forEach((sub, index) => {
            subContent.push(<UpdateTaskModelSubItem key={index} sub={sub} index={index} setTaskUpdate={setTaskUpdate} taskUpdate={taskUpdate}/>)
            // setSubtasks={setSubtasks} subTasks={subTasks}
        })
        return(subContent)
    }

    return (
        <div id='edit-task-modal-2' className='modal' style={{width: '60%', height: '60%'}}>
            <div className='modal-content'>
                <h4>Edit Task</h4>
                <div className='row'>
                    <div className='input-feild'>
                        <input type="text" name="name" value={taskUpdate.name} onChange={e => setTaskUpdate({...taskUpdate, name: e.target.value})}/>
                        <label htmlFor='name' className='active'>Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-feild'>
                            <input type="text" name="description" value={taskUpdate.description} onChange={e => setTaskUpdate({...taskUpdate, description: e.target.value})}/>
                            <label htmlFor='description' className='active'>Description</label>
                    </div>
                </div>
                <div className='row'>
                    {taskUpdate.subTasks === undefined ? <div className='input-feild'>
                            <input type="text" name="subtasks"  />
                            <input type="checkbox" className="filled-in" />
                            <label htmlFor='subtasks' className='active'>SubDescription</label>
                    </div>
                    : loopThroughSubTasks()}
                    {/* {subTaskItem.subTasks} */}
                    <button><i className='material-icons' onClick={newSubTask}>add</i></button> 
                    {/* onClick={newSubTask} */}
                </div>
                <div className='row'>
                    <Chips setTask={ setTaskUpdate } task={ taskUpdate } />
                </div>
                <div className='row'>
                    <div className='input-feild'>
                            <select name='priority'  className='browser-default' value={taskUpdate.priority} onChange={e => setTaskUpdate({...taskUpdate, priority: e.target.value})}>
                                <option value='' disabled>
                                    Select Priority
                                </option>
                                <option value="low">
                                    Low
                                </option>
                                <option value="med">
                                    Medium
                                </option>
                                <option value="high">
                                    High
                                </option>
                            </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-feild'>
                            <select name='priority'  className='browser-default' value={taskUpdate.category} onChange={e => setTaskUpdate({...taskUpdate, category: e.target.value})}>
                                <option value='' disabled>
                                    Select Category
                                </option>
                                <option value="started">
                                    Started
                                </option>
                                <option value="inProgress">
                                    In Progress
                                </option>
                                <option value="finished">
                                    Finished
                                </option>
                            </select>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                {/* Date Created Display */}

                <div>{`Date created: ${taskUpdate.date}`}</div>
                {/* cancel */}
                <a href="#!" className="modal-close waves-effect waves-light btn green">Cancel</a>

                {/* delete */}
                <a className='modal-close btn-floating red' onClick={onDelete}><i className='material-icons'>delete</i></a>

                {/* submit */}
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light btn">Enter</a>
            </div>
        </div>
    )
};

export default UpdateTaskModal;