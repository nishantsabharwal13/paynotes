const notes = require('./notes');
const login = require('./login');

module.exports = function (app) {
  notes(app);
  login(app);
};
