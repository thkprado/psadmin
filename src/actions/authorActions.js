const Dispatcher = require('../dispatcher/appDispatcher');
const AuthorApi = require('../api/authorApi');
const ActionType = require('../constants/actionTypes');

const AuthorActions = {
  createAuthor(author) {
    const newAuthor = AuthorApi.saveAuthor(author);

    // Hey dispatcher, go tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionType.CREATE_AUTHOR,
      author: newAuthor,
    });
  },
  updateAuthor(author) {
    const updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionType.UPDATE_AUTHOR,
      author: updatedAuthor,
    });
  },
  deleteAuthor(id) {
    AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      actionType: ActionType.DELETE_AUTHOR,
      id,
    });
  },
};

module.exports = AuthorActions;
