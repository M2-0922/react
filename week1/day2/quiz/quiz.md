1. What is a React component?

-   A React component is a reusable code block that encapsulates a functionality or UI element in a React application.

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

-   When you create function components, you have to put name from capital letter such as "MyComponent"

3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

-   When you render a component with ReactDOM.render, you need to pass the component itself as the first argument, not the result of calling the component. So instead of Header(), you should pass <Header />.
