import React from 'react';

const UpdateTaskModalNewTaskSubItem  = ({ sub, setNewTask, index, newTask }) => {
    return (
        <div className='input-feild'>
            <input type="text" name={`subtasks${index}`} value={sub[0]} onChange={e =>  {const tempSubT = [...newTask.subTasks]; 
            tempSubT[index][0]=e.target.value;
            setNewTask({...newTask, subTasks: tempSubT})}}/>
            <label htmlFor={`subtasks${index}`} className='active'>SubDescription</label>
        </div>
    )
};

export default UpdateTaskModalNewTaskSubItem;