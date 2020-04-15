const Characters = require('../controllers/characters');
module.exports = (app) => {
  app.get('api/characters', Characters.getAll);
  app.post('api/characters', Characters.create);
  app.get('/api/characters/:_id', Characters.getOne);
  // app.post('/api/reviews/:_id', Characters.review);
  // app.put('/api/characters/:_id', Characters.update);
  // app.delete('/api/characters/:_id', Characters.delete);
};
