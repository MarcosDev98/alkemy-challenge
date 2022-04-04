const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {

  const authorization = request.get('authorization');

  let token = '';

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  }

  //se supone que es secreta, deberia estar en un .env o algo asi.
  const decodedToken = jwt.verify(token, 'alkemy');
  if (!token || !decodedToken.id) {
    return response.status(401).json({
      error: 'token missing or invalid'
    });
  }

  const { id: user_id } = decodedToken;

  request.user_id = user_id;

  next();
};
