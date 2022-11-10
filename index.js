
// 📁 index.js
const express = require('express');
const app = express();
const path = require('path');
const serverRouter = require('./servers.js');

const PORT = process.env.PORT ?? 3000;

app.set("view engine", "ejs");

// 
app.get('/', (req, res) => {
    res.locals.responsesEqual = (req.res === res);
    res.locals.method = req.method;
    res.render(path.join(path.resolve(), "site", "main.ejs"));
})

app.use("/base", serverRouter);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
})





/* ↑ Выведет:

*/
// <pre style="word-wrap: break-word; white-space: pre-wrap;"></pre>
// let fruit = ['Персик', 'Банан', 'Яблоко', 'Апельсин', 'Груша', 'Ананас', 'Абрикос'];
// let name = ["David", "Adam", "Henry", "James", "John", "Lily", "Alice", "Daniel", "Kevin" ]
// let surname = ["Hill", "Cliff", "King", "Cloud", 'Smith', ]
// ↑ ↓ 📁
// let pathToChrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';