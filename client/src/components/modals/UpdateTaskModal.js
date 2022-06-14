import React, { useState } from 'react';

const UpdateTaskModal = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [subTasks, setSubTasks] = useState('');
    const [tags, setTags] = useState('');
    const [newCatagory, setNewCatagory] = useState('');

    const onSubmit = () => {
        console.log('close')
    }

    // const newSubTask = () => {
    //     return (
    //     <div className='input-feild'>
    //         <input type="text" name="subtasks" value={subTasks} />
    //         <label htmlFor='subtasks' className='active'>SubDescription</label>
    //     </div>
    //     )
    // }
    return (
        <div id='edit-task-modal' className='modal' style={{width: '50%', height: '50%'}}>
            <div className='modal-content'>
                <h4>Edit Task</h4>
                <div className='row'>
                    <div className='input-feild'>
                        <input type="text" name="name" value={name} />
                        <label htmlFor='name' className='active'>Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-feild'>
                            <input type="text" name="description" value={description} />
                            <label htmlFor='description' className='active'>Description</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-feild'>
                            <select name='priority' value={priority} className='browser-default'>
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
                <div className='row'>
                    <div className='input-feild'>
                            <input type="text" name="subtasks" value={subTasks} />
                            <label htmlFor='subtasks' className='active'>SubDescription</label>
                    </div>
                    <button><i className='material-icons' >add</i></button> 
                    {/* onClick={newSubTask} */}
                </div>
            </div>
            <div className='modal-footer'>
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light btn">Enter</a>
            </div>
        </div>
    )
};

export default UpdateTaskModal;