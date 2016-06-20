const Dispatcher = require('../dispatcher/appDispatcher');
const AuthorApi = require('../api/authorApi');
const ActionType = require('../constants/actionTypes');

const AuthorActions = {
  createAuthor(author) {
    const newAuthor = AuthorApi.saveAuthor(author);

    // Hey dispatcher, go tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionType.CREATE_AUTHOR,
      data: newAuthor,
    });
  },
};

module.exports = AuthorActions;
