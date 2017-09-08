//   ↓ ES2015 Class polyfill
var Todo = (function() {
  function Todo(text, completed, id) {
    _classCallCheck(this, Todo);

    this.Text = text;
    this.Completed = completed;
    this.Id = id | 0;
  }

  _createClass(Todo, [
    {
      //      ↓ ES2015 Symbol has been globally polyfilled
      key: _Symbol.reflection,
      value: function value() {
        // [...]
      },
    },

    // [...]
  ]);

  return Todo;
})();

