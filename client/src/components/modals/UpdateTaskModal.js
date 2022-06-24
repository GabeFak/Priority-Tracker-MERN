
import React, { useState, useContext, useEffect} from 'react';
import UserDataContext from '../../context/UserData/UserDataContext';
import UpdateTaskModelSubItem from './UpdateTaskModelSubItem';

const UpdateTaskModal = () => {
    const userDataContext = useContext(UserDataContext);
    const { currentTask, clearCurrentTask } = userDataContext;
    // const { category, name, description, subTasks, tags, priority, isFinished } = currentTask;
    // const [subTaskItem, setSubTaskItem] = useState({
    //     subTasks: []
    // })


    const [taskUpdate, setTaskUpdate] = useState({
        category: '',
        name: '',
        description: '',
        subTasks: '',
        tags: [],
        priority: '',
        isFinished: '',
        date: Date.now
    });
    // const [description, setDescription] = useState('');
    // const [priority, setPriority] = useState('');
    // const [subTasks, setSubTasks] = useState('');
    // const [tags, setTags] = useState('');
    // const [newCatagory, setNewCatagory] = useState('');

    const onSubmit = () => {
        console.log('close')
    }

    useEffect(() => {
        if(currentTask !== null) {
            setTaskUpdate(currentTask);
            
        } else {
            clearCurrentTask();
            setTaskUpdate({
                category: '',
                name: '',
                description: '',
                subTasks: '',
                tags: [],
                priority: '',
                isFinished: '',
                date: Date.now
            });
        }
        console.log(taskUpdate)
    }, [ currentTask, setTaskUpdate ]);


    const newSubTask = () => {
        setTaskUpdate({...taskUpdate, subTasks: [...taskUpdate.subTasks, ['', 0]]})
        loopThroughSubTasks();
    }

    const loopThroughSubTasks = () => {
        let subContent = [];
        taskUpdate.subTasks.forEach((sub, index) => {
                // <UpdateTaskModelSubItem key={index} sub={sub} setTaskUpdate={setTaskUpdate} taskUpdate={taskUpdate}/>
            subContent.push(<div key={index} className='input-feild'>
                <input type="text" name={`subtasks${index}`} value={taskUpdate.subTasks[index][0]} onChange={e => {
                const tempSubT = taskUpdate.subTasks;
                tempSubT[index][0]=e.target.value;
                console.log(tempSubT)
                setTaskUpdate({...taskUpdate, subTasks: tempSubT })}}/>
                {/* FIxThisLater!!! */}



                {/* onChange={e => setTaskUpdate({...taskUpdate, subTasks: [[e.target.value, ...taskUpdate.subTasks]] })} */}
                <label htmlFor={`subtasks${index}`} className='active'>SubDescription</label>
            </div>)
        })
        return subContent;
    }


    return (
        <div id='edit-task-modal' className='modal' style={{width: '60%', height: '60%'}}>
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
                    {taskUpdate.subTasks === '' ? <div className='input-feild'>
                            <input type="text" name="subtasks"  />
                            <label htmlFor='subtasks' className='active'>SubDescription</label>
                    </div>
                    : loopThroughSubTasks()}
                    {/* {subTaskItem.subTasks} */}
                    <button><i className='material-icons' onClick={newSubTask}>add</i></button> 
                    {/* onClick={newSubTask} */}
                </div>
                <div className='row'>
                    <div className='input-feild'>
                            <select name='priority'  className='browser-default'>
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
            </div>
        </div>
    )
};

export default UpdateTaskModal;