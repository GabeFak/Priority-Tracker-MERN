import React from 'react';

const UpdateTaskModelSubItem = ({ sub, setTaskUpdate, index, taskUpdate }) => {
  // setSubtasks  subTasks 
  return (
        <div className='input-feild'>
            <input type="text" name={`subtasks${index}`} value={sub[0]} onChange={e =>  {const tempSubT = [...taskUpdate.subTasks]; 
            tempSubT[index][0]=e.target.value;
            setTaskUpdate({...taskUpdate, subTasks: tempSubT})}}/>
            {/* setSubtasks(tempSubT) */}
            <label htmlFor={`subtasks${index}`} className='active'>SubDescription</label>
        </div>
  )
}

export default UpdateTaskModelSubItem