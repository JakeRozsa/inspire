import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let _todos = _todoService.Todos
	let template = ''
	_todos.forEach(todo => {
		if (todo.completed == true) {
			template += `<s>${todo.getTemplate()}</s>`
		} else {
			template += todo.getTemplate()
		}
	})
	document.getElementById('todos').innerHTML = template;
	document.getElementById('count').innerHTML = `<p>Task Count: ${_todos.length}</p>`
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}



export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let newTodo = {
			description: form.description.value
		}
		_todoService.addTodo(newTodo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
