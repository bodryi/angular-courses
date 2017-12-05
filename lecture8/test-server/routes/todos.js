const express = require('express');
const router = express.Router();

let todos_initial_array = [
    {
        id: 1,
        name: 'Todo 1',
        checked: false
    },
    {
        id: 2,
        name: 'Todo 2',
        checked: false
    },
    {
        id: 3,
        name: 'Todo 3',
        checked: false
    }
];

router.get('/', (req, res) => {
    res.status(200).json(todos_initial_array);
});

router.get('/:id', (req, res) => {
    const todo = todos_initial_array.find(todo => todo.id == req.params.id);
    if (todo)
        res.status(200).json(todo);
    else
        res.status(404).end()
});

router.post('/', (req, res) => {
    let new_todo = req.body;
    if (!new_todo.id || todos_initial_array.find(todo => todo.id == new_todo.id) || new_todo.name.length < 3)
        res.status(400).end()
    else {
        todos_initial_array.push(
            {
                id: new_todo.id,
                name: new_todo.name,
                checked: new_todo.checked || false,
                subTodos: new_todo.subTodos || []
            });
        res.status(201).json(todos_initial_array[todos_initial_array.length - 1]);
    }
});

router.put('/:id', (req, res) => {
    const indexToChange = todos_initial_array.findIndex(todo => todo.id == req.params.id);
    if(indexToChange < 0)
        res.status(400).end()
    else {
        const todo = todos_initial_array[indexToChange];
        const new_todo = req.body;
        Object.assign(todos_initial_array[indexToChange], new_todo);
        res.status(200).json(todos_initial_array[indexToChange]);
    }
});

router.delete('/:id', function (req, res) {
    const indexToDelete = todos_initial_array.findIndex(todo => todo.id == req.params.id);
    if(indexToDelete < 0)
        res.status(400).end()
    else {
        todos_initial_array.splice(indexToDelete, 1);
        res.status(200).end();
    }
});

module.exports = router;