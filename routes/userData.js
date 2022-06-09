const express = require('express');
const router = express.Router();

//@route   GET api/userData
//@desc    Get all user's data.
//@access  Private
router.get('/', (req, res) => {
    res.send('Get all user data');
});

//@route   POST api/userData
//@desc    Add new task.
//@access  Private
router.post('/', (req, res) => {
    res.send('Add new task');
});

//@route   PUT api/userData/:id
//@desc    Update task.
//@access  Private
router.put('/:id', (req, res) => {
    res.send('Update task');
});

//@route   DELETE api/userData/:id
//@desc    Delete task.
//@access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete task');
});



module.exports = router;

