const Task = require('../Models/Task');

// CRUD operation
// Create // POST
exports.createTask = async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(404).json({
        success: false,
        message: "Some fields are missing !!"
      });
    }

    const task = await Task.create({ title: title });
    return res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Error occurred during creating of task !!"
    });
  }
}


// Get All // GET
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({
      success: true,
      data: tasks,
      count: tasks.length
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Error occurred during fetching of all tasks !!"
    });
  }
}

// Get a task  // GET
exports.getTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "No such task found !!"
      });
    }

    return res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Error occurred during fetching a task !!"
    });
  }
}

// Update a task // PUT
exports.updateTask = async (req, res, next) => {
  try {
    const { taskId, title } = req.body;
    if (!(taskId && title)) {
      return res.status(404).json({
        success: false,
        message: "Some fields are missing !!"
      });
    }

    let task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "No such task found !!"
      });
    }

    task = await Task.findByIdAndUpdate(taskId, { title: title }, { new: true });
    return res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Error occurred during updating of task !!"
    });
  }
}

// Delete a task // DELETE
exports.deleteTask = async (req, res, next) => {
  try {
    const { taskId } = req.body;
    if (!(taskId)) {
      return res.status(404).json({
        success: false,
        message: "Some fields are missing !!"
      });
    }

    let task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "No such task found !!"
      });
    }

    await task.deleteOne();
    return res.status(200).json({
      success: true,
      message: "Task deleted successfully !!"
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Error occurred during deleting of task !!"
    });
  }
}