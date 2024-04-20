require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost';
const TodoModel = require('./models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI)
    .then(r => console.log('Connected to '+ r.modelNames()))
    .catch(err => console.log(err));

app.get('/getAllTasks',(req,res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.put('/updateTask/:id',(req,res) => {
    const id = req.params.id;
    const completed  = req.body.completed ;

    TodoModel.findByIdAndUpdate(
        {_id: id},
        {completed:completed}
    ).then(result => res.json(result))
        .catch(err => res.json(err));
});

app.delete('/deleteTask/:id',(req,res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete(
        id,
    ).then(result => res.json(result))
        .catch(err => res.json(err));
});
app.post('/addTask',  (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task:task
    }).then(result => res.json(result))
        .catch(err => res.json(err));

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});


