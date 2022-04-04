const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// CONTROLLERS
const userRouter = require('./controllers/user');
const transactionRouter = require('./controllers/transaction');
const typesRouter = require('./controllers/type');
const categoriesRouter = require('./controllers/category');
const loginRouter = require('./controllers/login');

const PORT = 5005;


dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/types', typesRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/login', loginRouter);

app.listen(PORT);
console.log('listen on PORT: ', PORT);