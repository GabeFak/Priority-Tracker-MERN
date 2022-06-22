
import React, { useState, useContext } from 'react';
import UserDataContext from '../../context/UserData/UserDataContext';

const NewTaskBacklogModal = () => {
    const userDataContext = useContext(UserDataContext);
    const { addTask} = userDataContext;

    const [newTask, setNewTask] = useState({
        category: 'backlog',
        name: '',
        description: '',
        subTasks: '',
        tags: [{tag: 'Tags'}],
        priority: 'low',
        isFinished: false,
        date: ''
    });

    const newDatePlusAdd = (callback) => {
        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        let dateTime = cDate + ' ' + cTime;
        callback({...newTask, date: dateTime});
    };

    const addDate = () => {
        newDatePlusAdd(setNewTask); 
    };

    const onSubmit = () => {
        if(newTask.name !== '' && newTask.description !== '') {
            addTask(newTask);
        } else {
        // console.log('please add name');
        // Alert State Here
        };
        setNewTask({
            category: 'backlog',
            name: '',
            description: '',
            subTasks: '',
            tags: [{tag: 'Tags'}],
            priority: 'low',
            isFinished: false,
            date: ''
        });    
    };

    const onClear = () => {
        setNewTask({
            category: 'backlog',
            name: '',
            description: '',
            subTasks: '',
            tags: [{tag: 'Tags'}],
            priority: 'low',
            isFinished: false,
            date: ''
        });
    };
    
    return (
        <div id='new-task-modal' className='modal' style={{width: '40%', height: '40%'}}>
            <div className='modal-content'>
                <h4>Create New Backlog Task</h4>
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
                    <div className='input-feild'>
                            <select name='priority'  className='browser-default' value={newTask.priority} onChange={e => setNewTask({...newTask, priority: e.target.value})}>
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
            </div>
            <div className='modal-footer'>
                {/* cancel */}
                <a href="#!" onClick={onClear} className="modal-close waves-effect waves-light btn green">Cancel</a>
                {/* submit */}
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light btn">Enter</a>
            </div>
        </div>
    )
};
    
export default NewTaskBacklogModal;