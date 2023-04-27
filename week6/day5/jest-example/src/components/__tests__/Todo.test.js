import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";
// snapshot
import renderer from "react-test-renderer";

// test("should render todo component", () => {
//     render(<Todo />)
//     const todoElement = screen.getByTestId("todo-1");
//     expect(todoElement).toBeInTheDocument();
// });

test("should render non-completed todo element", () => {
    const todo = { id: 2, title: "create home component", completed: false };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId("todo-2");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("create home component");
    expect(todoElement).not.toContainHTML("<strike><h1>create home component</h1></strike>")
});

test("should render completed todo element", () => {
    const todo = { id: 1, title: "create react app", completed: true };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId("todo-1");
    expect(todoElement).toContainHTML("<strike><h1>todo - create react app</h1></strike>")
});

test("matches snapshot", () => {
    const todo = { id: 3, title: "drink coffee", completed: true };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();
})