import React from 'react';

const UpdateTaskModelSubItem = ({ sub, setTaskUpdate, index, taskUpdate, display }) => {
    return (
        <div className='input-feild' >
              <input type="text" name={`subtasks${index}`} value={sub[0]} onChange={e =>  {const tempSubT = [...taskUpdate.subTasks]; tempSubT[index][0]=e.target.value; setTaskUpdate({...taskUpdate, subTasks: tempSubT})}}/>
              <div className='row'>
                  <div className='input-field'>
                      <p>
                          <label>

                              <input style={{opacity: "1", pointerEvents: "all", display: {display} }}type="checkbox" className="filled-in" checked={sub[1]} value={sub[1]} 
                              
                              onChange={e => { const tempSubTaskIO = [...taskUpdate.subTasks]; tempSubTaskIO[index][1]=!tempSubTaskIO[index][1];
                                
                              setTaskUpdate({...taskUpdate, subTasks: tempSubTaskIO})}}/>
             

                          </label>
                      </p>
                      <label htmlFor={`subtasks${index}`} className='active'>SubDescription</label>
                  </div>
              </div>
        </div>
    )
};

export default UpdateTaskModelSubItem;