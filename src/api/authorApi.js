// This file is mocking a web API by hitting hard coded data.
const { authors } = require('./authorData');
const _ = require('lodash');

// This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;

// Return cloned copy so that the item is passed by value instead of by reference
const clone = (item) => JSON.parse(JSON.stringify(item));

const AuthorApi = {
  getAllAuthors: () => clone(authors),
  getAuthorById(id) {
    const author = _.find(authors, { id });
    return clone(author);
  },
  saveAuthor(author) {
    // pretend an ajax call to web api is made here
    console.log('Pretend this just saved the author to the DB via AJAX call...');
    const savedAuthor = clone(author);

    if (author.id) {
      const existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
      authors.splice(existingAuthorIndex, 1, author);
    } else {
      // Just simulating creation here.
      // The server would generate ids for new authors in a real app.
      // Cloning so copy returned is passed by value rather than by reference.
      savedAuthor.id = generateId(author);
      authors.push(savedAuthor);
    }

    return savedAuthor;
  },
  deleteAuthor(id) {
    console.log('Pretend this just deleted the author from the DB via an AJAX call...');
    _.remove(authors, { id });
  },
};

module.exports = AuthorApi;
