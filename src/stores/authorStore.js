const Dispatcher = require('../dispatcher/appDispatcher');
const ActionType = require('../constants/actionTypes');
const { EventEmitter } = require('events');
const _ = require('lodash');
const CHANGE_EVENT = 'change';

let authors = [];

const AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  getAllAuthors() {
    return authors;
  },
  getAuthorById(id) {
    return _.find(authors, { id });
  },
});

Dispatcher.register((action) => {
  switch (action.actionType) {
    case ActionType.INITIALIZE:
      authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionType.CREATE_AUTHOR:
      authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionType.UPDATE_AUTHOR:
      {
        const existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: action.author.id }));
        authors.splice(existingAuthorIndex, 1, action.author);
        AuthorStore.emitChange();
        break;
      }
    case ActionType.DELETE_AUTHOR:
      _.remove(authors, { id: action.id });
      AuthorStore.emitChange();
      break;
    default:
  }
});

module.exports = AuthorStore;
