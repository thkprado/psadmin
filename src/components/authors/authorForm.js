const React = require('react');
const Input = require('../common/textInput.js');

function AuthorForm({ author, onChange, onSave }) {
  return (
    <form>
      <h1>Manage Author</h1>
      <Input
        name="firstName"
        label="First Name"
        value={author.firstName}
        onChange={onChange}
      />
      <Input
        name="lastName"
        label="Last Name"
        value={author.lastName}
        onChange={onChange}
      />
      <br />
      <input type="submit" value="Save" className="btn btn-default" onClick={onSave} />
    </form>
  );
}

AuthorForm.propTypes = {
  author: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func,
  onSave: React.PropTypes.func,
};

module.exports = AuthorForm;
