const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleWare/auth');

const User = require('../models/User');
const UserData = require('../models/UserData');


//@route   GET api/userData
//@desc    Get all user's data.
//@access  Private
router.get('/', auth, async (req, res) => {
    try {
        const userData = await UserData.find({ user: req.user.id }).sort({ category: -1 });
        res.json(userData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   POST api/userData
//@desc    Add new task.
//@access  Private
router.post('/', [auth, [
    check('category', 'Category is required').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('isFinished', 'IsFinished is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { category, name, description, subTasks, tags, priority, isFinished, date } = req.body;

    try {
        const newTask = new UserData({
            category,
            name,
            description,
            subTasks, 
            tags, 
            priority, 
            isFinished, 
            date,
            user: req.user.id
        });

        const task = await newTask.save();

        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   PUT api/userData/:id
//@desc    Update task.
//@access  Private
router.put('/:id', auth, async (req, res) => {
    const { category, name, description, subTasks, tags, priority, isFinished } = req.body;

    // Build Task Object
    const taskFeilds = {};
    if(category) taskFeilds.category = category;
    if(name) taskFeilds.name = name;
    if(description) taskFeilds.description = description;
    if(subTasks) taskFeilds.subTasks = subTasks;
    if(tags) taskFeilds.tags = tags;
    if(priority) taskFeilds.priority = priority;
    if(isFinished) taskFeilds.isFinished = isFinished;

    try {
        let task = await UserData.findById(req.params.id);

        if(!task) return res.status(404).json({ msg: 'Task not found' });

        // Make sure user has permisions to task
        if(task.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        };

        task = await UserData.findByIdAndUpdate(req.params.id, 
            { $set: taskFeilds },
            { new: true });
        
        res.json(task);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    };
});

//@route   DELETE api/userData/:id
//@desc    Delete task.
//@access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let task = await UserData.findById(req.params.id);

        if(!task) return res.status(404).json({ msg: 'Task not found' });

        // Make sure user has permisions to task
        if(task.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        };

        await UserData.findByIdAndRemove(req.params.id);
        
        res.json({ msg: 'Task Removed'});

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    };
});



module.exports = router;

