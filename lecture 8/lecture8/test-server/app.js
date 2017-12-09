const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

const todos = require('./routes/todos');

// BodyPasrser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/todos', todos);
app.all('*', (req, res) => {
    console.log("Not api or files request. Returning index.html");
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
    console.log('Server started at port ' + app.get('port'));
});