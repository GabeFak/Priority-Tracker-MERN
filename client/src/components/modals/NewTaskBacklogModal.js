
import React, { useState, useContext, useEffect} from 'react';
import UserDataContext from '../../context/UserData/UserDataContext';

const NewTaskBacklogModal = () => {
        const userDataContext = useContext(UserDataContext);
        const { addTask} = userDataContext;

        const [newTask, setNewTask] = useState({
            category: 'backlog',
            name: '',
            description: '',
            subTasks: '',
            tags: [],
            priority: 'low',
            isFinished: false,
            date: Date.now
        });

        const onSubmit = () => {
            if(newTask.name !== ''){
                addTask(newTask);
            } else {
            console.log('please add name');
            }
            setNewTask({
                category: 'backlog',
                name: '',
                description: '',
                subTasks: '',
                tags: [],
                priority: 'low',
                isFinished: false,
                date: Date.now
            });    
        }

        const onClear = () => {
            setNewTask({
                category: 'backlog',
                name: '',
                description: '',
                subTasks: '',
                tags: [],
                priority: 'low',
                isFinished: false,
                date: Date.now
            });
        }
    
        return (
            <div id='new-task-modal' className='modal' style={{width: '40%', height: '40%'}}>
                <div className='modal-content'>
                    <h4>Create New Backlog Task</h4>
                    <div className='row'>
                        <div className='input-feild'>
                            <input type="text" name="name" value={newTask.name} onChange={e => setNewTask({...newTask, name: e.target.value})}/>
                            <label htmlFor='name' className='active'>Name</label>
                        </div>
                    </div>
                </div>
                <div className='modal-footer'>
                    {/* cancel */}
                    <a href="#!" onClick={onClear} className="modal-close waves-effect waves-light btn green">Cancel</a>

                    {/* submit */}
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light btn">Enter</a>
                    {/* create button for setting to 'started' */}
                </div>
            </div>
        )
    };
    


export default NewTaskBacklogModal;