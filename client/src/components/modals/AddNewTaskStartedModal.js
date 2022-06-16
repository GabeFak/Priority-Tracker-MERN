import React, { useState, useContext } from 'react';
import UserDataContext from '../../context/UserData/UserDataContext';
import UpdateTaskModalNewTaskSubItem from './UpdateTaskModalNewTaskSubItem';

const AddNewTaskStartedModal = () => {
        const userDataContext = useContext(UserDataContext);
        const { addTask } = userDataContext;

        const [newTask, setNewTask] = useState({
            category: 'started',
            name: '',
            description: '',
            subTasks: '',
            tags: [],
            priority: 'low',
            isFinished: false,
            date: Date.now
        });

        const onSubmit = () => {
            if(newTask.name !== '' && newTask.description !== ''){
                addTask(newTask);
            } else {
                console.log('please add name and description');
            }
            setNewTask({
                category: 'started',
                name: '',
                description: '',
                subTasks: '',
                tags: [],
                priority: 'low',
                isFinished: false,
                date: Date.now
            });
        }

        const newSubTask = () => {
            setNewTask({...newTask, subTasks: [...newTask.subTasks, ['', 0]]});
            loopThroughSubTasks();
        }
    
        const loopThroughSubTasks = () => {
            let subContent = [];
            const ittr = [...newTask.subTasks];
            ittr.forEach((sub, index) => {
                subContent.push(<UpdateTaskModalNewTaskSubItem key={index} sub={sub} index={index} setNewTask={setNewTask} newTask={newTask}/>)
            })
            return(subContent)
        }
    
        return (
            <div id='new-task-modal-started' className='modal' style={{width: '60%', height: '60%'}}>
                <div className='modal-content'>
                    <h4>Create New Backlog Task</h4>
                    <div className='row'>
                        <div className='input-feild'>
                            <input type="text" name="name" value={newTask.name} onChange={e => setNewTask({...newTask, name: e.target.value})}/>
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
                    {newTask.subTasks === '' ? <div className='input-feild'>
                            <input type="text" name="subtasks" value={newTask.subTasks} onChange={e => setNewTask({...newTask, subTasks: [[e.target.value, 0]] })} />
                            <label htmlFor='subtasks' className='active'>SubDescription</label>
                    </div>
                    : loopThroughSubTasks()}
                    <button><i className='material-icons' onClick={newSubTask}>add</i></button> 
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
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light btn">Enter</a>
                    {/* create button for setting to 'started' */}
                </div>
            </div>
        )
    };
    


export default AddNewTaskStartedModal;