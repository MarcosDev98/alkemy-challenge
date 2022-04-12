const mysqlConnection = require('../connection');

module.exports = async (request, response, next) => {

  const { username } = request.body;

  await mysqlConnection.query(`SELECT * FROM user WHERE username='${username}';`, (err,results) => {
    if (err) {
      const error = { code: err.code, message: err.message };
      throw error;
    }
    if (results.length > 0) {
      return response.status(500).json({
        error: 'username already used'
      });
    }

    request.isUsed = false;
    next();
  });
};