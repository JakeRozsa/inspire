

export default class Todo {
  constructor(data) {
    console.log(data)
    this._id = data._id
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
  }

  getTemplate() {
    return `
      <li onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')>  <span id="${this._id}">${this.description}</span>  <span onclick="app.controllers.todoController.removeTodo('${this._id}')">  <i class="fas fa-trash-alt"></i>  </span>  </li>
    `
  }
}
