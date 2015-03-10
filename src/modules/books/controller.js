const Endpoints = require('endpoints');
const schema = require('./schema')

module.exports = new Endpoints.Controller({
  source: new Endpoints.BookshelfSource({
     model: require('./model'),
     validate: schema
   })
});
