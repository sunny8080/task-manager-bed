const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/connectMongo');
const path = require('path');

dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();
connectDB(); // create db connection

app.use(cors())
app.use(express.json());

const TaskR = require('./Routes/TaskR.js'); // Mount Route for task
app.use('/api/v1/tasks', TaskR);

app.get('/', (req, res) => {
  res.send('Hello from task manager');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error occurred");
    process.exit();
  } else {
    console.log(`Server started at port : ${PORT}`);
  }
});


