import React, { useState, useContext, useEffect} from 'react';
import UserDataContext from '../../context/UserData/UserDataContext';
import UpdateTaskModelSubItem from './UpdateTaskModelSubItem';
import Chips from './modalSubComponents/Chips';

const UpdateTaskModal = () => {
    const userDataContext = useContext(UserDataContext);
    const { currentTask, updateTask, deleteTask} = userDataContext;

    const [taskUpdate, setTaskUpdate] = useState({
        _id: '',
        category: '',
        name: '',
        description: '',
        subTasks: [],
        tags: [],
        priority: '',
        isFinished: '',
        date: ''
    });

    const onDelete = () => {
        deleteTask(currentTask._id);
    };

    const onSubmit = () => {
        if(taskUpdate.subTasks === [''] ) {
            setTaskUpdate({ ...taskUpdate, subTasks: []});
            updateTask(taskUpdate);
        } else {
            updateTask(taskUpdate);
        }
        
    };

    useEffect(() => {
        if(currentTask !== null) {
            setTaskUpdate({...taskUpdate, name: currentTask.name, description: currentTask.description, isFinished: currentTask.isFinished, priority: currentTask.priority, tags: currentTask.tags, category: currentTask.category, subTasks: currentTask.subTasks, date: currentTask.date, _id: currentTask._id});
        };
    }, [ currentTask, setTaskUpdate]);

    const newSubTask = () => {
        setTaskUpdate({...taskUpdate, subTasks: [...taskUpdate.subTasks, ['', 0]]});
        loopThroughSubTasks();
    };

    const loopThroughSubTasks = () => {
        let subContent = [];
        const ittr = [...taskUpdate.subTasks];
        ittr.forEach((sub, index) => {
            if(index === 0) {
                subContent.push(<UpdateTaskModelSubItem key={index} sub={sub} index={index} setTaskUpdate={setTaskUpdate} taskUpdate={taskUpdate} display='none'/>);
                console.log(0)
            } else {
                subContent.push(<UpdateTaskModelSubItem key={index} sub={sub} index={index} setTaskUpdate={setTaskUpdate} taskUpdate={taskUpdate} display='block'/>);
            }
            
        });
        return(subContent);
    };

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
                    {/* {taskUpdate.subTasks === [''] ? 
                        <div className='input-feild'>
                            {console.log('hi')}
                            <input type="text" name="subtasks"  />
                            <input type="checkbox" className="filled-in" />
                            <label htmlFor='subtasks' className='active'>SubDescription</label>
                        </div>
                    :  */}
                    {loopThroughSubTasks()}
                    {/* } */}
                    <button><i className='material-icons' onClick={newSubTask}>add</i></button> 
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