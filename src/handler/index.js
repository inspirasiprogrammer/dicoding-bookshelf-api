const addBookHandler = require('./addBookHandler');
const deleteBookByIdHandler = require('./deleteBookByIdHandler');
const editBookByIdHandler = require('./editBookByIdHandler');
const getAllBooksHandler = require('./getAllBooksHandler');
const getBookByIdHandler = require('./getBookByIdHandler');

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
