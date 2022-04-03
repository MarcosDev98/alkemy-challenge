const userRouter = require('express').Router();
const mysqlConnection = require('../connection');
const { is_deleted, is_not_deleted } = require('../utils/globals.js');
const encryptPassword = require('../utils/hashPassword');
const express = require('express');

userRouter.use(express.json());

userRouter.post('/create', async (req, res) => {

  const { username, password, email, firstname, lastname } = req.body;


  const hashedPassword = encryptPassword(password);

  let isUsed = false;

  await mysqlConnection.query(`SELECT * FROM user WHERE username='${username}';`, (err,results) => {
    if (err) {
      const error = { code: err.code, message: err.message };
      throw error;
    }
    if (results.affectedRows > 0) {
      isUsed = true;
    }

  });

  if (!isUsed) {
    await mysqlConnection.query(`INSERT INTO user (username, password, email, firstname, lastname, is_deleted) VALUES('${username}', '${hashedPassword}', '${email}', '${firstname}', '${lastname}', '${is_not_deleted}');`, (err) => {
      if (err) {
        const error = { code: err.code, message: err.message };
        throw error;
      } else {
        res.json({ status: 'OK' });
      }
    });
  } else {
    res.json({ code: 'USERNAME_USED', message: 'username is already used' });
  }

});

userRouter.put('/update', async (req, res) => {
  const { id, password, email, firstname, lastname } = req.body;

  await mysqlConnection.query(`UPDATE user SET password=${password}, email=${email}, firstname=${firstname}, lastname=${lastname} WHERE id=${id};`, (err) => {
    if (err) {
      const error = { code: err.code, message: err.message };
      throw error;
    } else {
      res.json({ status: 'OK' });
    }
  });
});

// ELIMINAR USUARIO
userRouter.delete('/delete', async (req, res) => {
  const { id } = req.body;

  await mysqlConnection.query(`UPDATE user SET is_deleted=${is_deleted} WHERE id=${id};`, (err) => {
    if (err) {
      const error = { code: err.code, message: err.message };
      throw error;
    } else {
      res.json({ status: 'OK' });
    }
  });
});


module.exports = userRouter;