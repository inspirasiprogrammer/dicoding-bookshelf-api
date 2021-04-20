const books = require('../books');

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  let booksResult = [...books];

  if (name) {
    booksResult = booksResult.filter((n) => n.name.match(new RegExp(name, 'i')));
  }
  if (reading && !Number.isNaN(reading)) {
    const condition = Boolean(parseInt(reading, 10) > 0);
    booksResult = booksResult.filter((n) => n.reading === condition);
  }
  if (finished && !Number.isNaN(finished)) {
    const condition = Boolean(parseInt(finished, 10) > 0);
    booksResult = booksResult.filter((n) => n.finished === condition);
  }

  const debug = false;
  const response = h
    .response({
      status: 'success',
      data: {
        books: debug
          ? booksResult
          : booksResult.map((n) => ({
            id: n.id,
            name: n.name,
            publisher: n.publisher,
          })),
      },
    })
    .code(200);

  return response;
};

module.exports = getAllBooksHandler;
