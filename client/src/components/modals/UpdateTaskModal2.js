
import React, { useState, useContext, useEffect} from 'react';
import UserDataContext from '../../context/UserData/UserDataContext';
import UpdateTaskModelSubItem from './UpdateTaskModelSubItem';

const UpdateTaskModal = () => {
// I belive the issue has to do with something retriggering inside of the modal once clearCurrentTask is called
    const [taskUpdate, setTaskUpdate] = useState({
        category: '',
        name: '',
        description: '',
        tags: [],
        priority: '',
        isFinished: '',
        date: Date.now
    });

    const userDataContext = useContext(UserDataContext);
    const { currentTask, clearCurrentTask } = userDataContext;

    const [subTasks, setSubtasks] = useState();

    const onSubmit = () => {
        // clearCurrentTask();
        console.log('close')
    }

    useEffect(() => {
        //this needs a set timeout 
        if(currentTask !== null) {
            setSubtasks(null)
            setTaskUpdate({...taskUpdate, name: currentTask.name, description: currentTask.description});
            let foo = currentTask.subTasks
            setSubtasks(foo);
            console.log(subTasks)
        }
        console.log(taskUpdate)
    }, [ currentTask, setTaskUpdate ]);


    const newSubTask = () => {
        setSubtasks([...subTasks, ['', 0]]);
        loopThroughSubTasks();
    }

    const loopThroughSubTasks = () => {
        let subContent = [];

        const ittr = [...subTasks];
        ittr.forEach((sub, index) => {
            subContent.push(<UpdateTaskModelSubItem key={index} sub={sub} index={index} setSubtasks={setSubtasks} subTasks={subTasks}/>)
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
                    {subTasks === undefined ? <div className='input-feild'>
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