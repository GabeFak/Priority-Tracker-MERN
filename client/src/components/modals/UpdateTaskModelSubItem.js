import React from 'react';

const UpdateTaskModelSubItem = ({ sub, setSubtasks, index, subTasks }) => {
  return (
        <div className='input-feild'>
            <input type="text" name={`subtasks${index}`} value={sub[0]} onChange={e =>  {const tempSubT = [...subTasks]; 
            tempSubT[index][0]=e.target.value;
            setSubtasks(tempSubT)}}/>
            <label htmlFor={`subtasks${index}`} className='active'>SubDescription</label>
        </div>
  )
}

export default UpdateTaskModelSubItem