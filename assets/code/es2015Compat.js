  //   ↓ ES2015 Class
class Todo {
  constructor(text, completed, id) {
    this.Text = text;
    this.Completed = completed;
    this.Id = id | 0;
  }

  //  ↓ ES2015 Symbol
  [_Symbol.reflection]() {
    return {
      type: 'ReduxTodoMVC.Todo',
      interfaces: ['FSharpRecord', 'System.IEquatable', 'System.IComparable'],
      properties: {
        Text: 'string',
        Completed: 'boolean',
        Id: 'number',
      },
    };
  }

  // [...]
}
