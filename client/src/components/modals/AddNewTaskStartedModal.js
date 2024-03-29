import React, { useState, useContext } from 'react';
import UserDataContext from '../../context/UserData/UserDataContext';
import UpdateTaskModalNewTaskSubItem from './UpdateTaskModalNewTaskSubItem';
import AlertContext from '../../context/Alert/AlertContext';

const AddNewTaskStartedModal = () => {
    const userDataContext = useContext(UserDataContext);
    const { addTask } = userDataContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const newDatePlusAdd = (callback) => {
        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        let dateTime = cDate + ' ' + cTime;
        callback({...newTask, date: dateTime});
    };

    const [newTask, setNewTask] = useState({
        category: 'started',
        name: '',
        description: '',
        subTasks: '',
        tags: [{tag: 'Tags'}],
        priority: 'low',
        isFinished: false,
        date: ''
    });

    const addDate = () => {
        newDatePlusAdd(setNewTask); 
    };

    const onClear = () => {
        setNewTask({
            category: 'started',
            name: '',
            description: '',
            subTasks: '',
            tags: [{tag: 'Tags'}],
            priority: 'low',
            isFinished: false,
            date: ''
        });
    };

    const onSubmit = () => {
        if(newTask.name !== '' && newTask.description !== '' && newTask.subTasks !== '') {
            addTask(newTask)
        } else {
            setAlert('Please fill out all feilds', 'danger', 2);
        };
        onClear();
    };

    const newSubTask = () => {
        setNewTask({...newTask, subTasks: [...newTask.subTasks, ['', 0]]});
        loopThroughSubTasks();
    };
    
    const loopThroughSubTasks = () => {
        let subContent = [];
        const ittr = [...newTask.subTasks];
        ittr.forEach((sub, index) => {
            subContent.push(<UpdateTaskModalNewTaskSubItem key={index} sub={sub} index={index} setNewTask={setNewTask} newTask={newTask}/>)
        });
        return(subContent);
    };
    
    return (
        <div id='new-task-modal-started' className='modal new-task-modal-s' >
            <div className='modal-content'>
                <h4>Create New Started Task</h4>
                <div className='row'>
                    <div className='input-feild'>
                        <input onClick={addDate} type="text" name="name" value={newTask.name} onChange={e => setNewTask({...newTask, name: e.target.value})}/>
                        <label htmlFor='name' className='active'>Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-feild'>
                            <input type="text" name="description" value={newTask.description} onChange={e => setNewTask({...newTask, description: e.target.value})}/>
                            <label htmlFor='description' className='active'>Description</label>
                    </div>
                </div>
                <div className='row'>
                    {newTask.subTasks === '' ?
                        <div className='input-feild'>
                            <input type="text" name="subtasks" value={newTask.subTasks} onChange={e => setNewTask({...newTask, subTasks: [[e.target.value, 0]] })} />
                            <label htmlFor='subtasks' className='active'>SubDescription</label>
                        </div>
                    : 
                        loopThroughSubTasks()
                    }
                    <button className="add-btn" ><i className='material-icons add' style={{color: "darkslategray"}} onClick={newSubTask}>add</i></button> 
                </div>
                <div className='row'>
                    <div className='input-feild'>
                        <select style={{color: "darkslategray"}} name='priority'  className='browser-default' value={newTask.priority} onChange={e => setNewTask({...newTask, priority: e.target.value})}>
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
                <div className='modal-footer' style={{paddingRight: '0px', paddingTop: '28px'}}>
                    {/* cancel */}
                    <a style={{marginLeft: '40px'}} href="#!" onClick={onClear} className="modal-close waves-effect waves-light btn green">Cancel</a>
                    {/* submit */}
                    <a style={{marginLeft: '40px'}} href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light btn">Enter</a>
                </div>
            </div>
        </div>
    )
};
    
export default AddNewTaskStartedModal;