import "./App.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, deleteTodo, toggleTodo, editTodo, submitTodo } from "./actions/actions";

function App() {
	const todos = useSelector((state) => state.todos);
	const inputRef = useRef(null);
	const inputTextRef = useRef(null);
	const dispatch = useDispatch();

	const handleClick = () => {
		const data = {
			id: uuidv4(),
			text: inputRef.current.value,
			completed: false,
		};

		dispatch(addTodo(data));
		inputRef.current.value = "";
	};

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleToggle = (id) => {
		dispatch(toggleTodo(id));
	};

	// write a function for edit todo to dispatch to reducer

	const handleEdit = (id) => {
		dispatch(editTodo(id));
	};

	const handleSubmit = (id) => {
		const newText = inputTextRef.current.value;
		dispatch(submitTodo(id, newText));
		inputTextRef.current.value = "";
	};

	return (
		<div className="App">
			<input type="text" ref={inputRef} />
			<button onClick={handleClick}>Add</button>
			{todos.map((todo) => {
				return (
					<div key={todo.id}>
						<li className="todo">
							<input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
							{!todo.inputTable ? (
								<>
									<b className={todo.completed ? "completed-todo" : ""}>{todo.text}</b>
									{/* once you click to edit button, its going to have an input instead of text and once you type and submit, you need to dispatch to reducer. */}
									<button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
								</>
							) : (
								<>
									<input type="text" defaultValue={todo.text} ref={inputTextRef} />
									<button onClick={() => handleSubmit(todo.id)}>Submit</button>
								</>
							)}
							<button onClick={() => handleDelete(todo.id)}>Delete</button>
						</li>
					</div>
				);
			})}
		</div>
	);
}

export default App;
