const transactionRouter = require('express').Router();
const mysqlConnection = require('../connection.js');
const { is_deleted, is_not_deleted } = require('../utils/globals.js');
const userExtractor = require('../middlewares/userExtractor');


transactionRouter.get('/', userExtractor, async (req, res) => {

  const { user_id } = req;

  await mysqlConnection.query(`SELECT id, concept, amount, date, user_id, id_type_transaction, is_deleted, category_id FROM transaction WHERE is_deleted='${is_not_deleted}' AND user_id=${user_id};`, (err, results ) => {
    if (err) {
      const error = { code: err.code, message: err.message };
      res.status(500).json(error);
      throw error;
    } else {
      res.send(results);
    }
  });

});


transactionRouter.post('/create', userExtractor, async (req, res) => {

  const { concept, amount, date, id_type_transaction } = req.body;

  const { user_id } = req;

  await mysqlConnection.query(`INSERT INTO transaction (concept, amount, date, user_id, id_type_transaction, is_deleted, category_id) VALUES('${concept}', ${amount}, '${date}', ${user_id}, ${id_type_transaction}, '${is_not_deleted}', '${0}');`, (err) => {
    if (err) {
      const error = { code: err.code, message: err.message };
      throw error;
    } else {
      res.json({ status: 'OK' });
    }
  });

});

transactionRouter.put('/update', userExtractor, async (req, res) => {

  const { id, concept, amount, date } = req.body;

  const { user_id } = req;

  await mysqlConnection.query(`UPDATE transaction SET concept='${concept}', amount=${amount}, date='${date}' WHERE id=${id} AND user_id=${user_id};`, (err) => {
    if (err) {
      const error = { code: err.code, message: err.message };
      throw error;
    } else {
      res.json({ status: 'OK' });
    }
  });

});

transactionRouter.delete('/delete', userExtractor, async (req, res) => {
  const { id } = req.body;

  const { user_id } = req;

  await mysqlConnection.query(`UPDATE transaction SET is_deleted='${is_deleted}' WHERE id=${id} AND user_id=${user_id};`, (err) => {
    if (err) {
      const error = { code: err.code, message: err.message };
      throw error;
    } else {
      res.json({ status: 'OK' });
    }
  });

});

module.exports = transactionRouter;