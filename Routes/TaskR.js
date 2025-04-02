const express = require('express');
const router = express.Router();

const { createTask, getAllTasks, getTask, updateTask, deleteTask } = require('../Controllers/TaskC.js')

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:taskId', getTask);
router.put('/', updateTask);
router.delete('/', deleteTask);

module.exports = router;