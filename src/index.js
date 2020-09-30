const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// maintenance mode
// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down. Check back later.');
// });

app.use(express.json());

// handle users
app.use(userRouter);

// handle tasks
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
