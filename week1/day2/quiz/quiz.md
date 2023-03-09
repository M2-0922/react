1. What is a React component?
A component is a feature of React to return HTML elements. Components are isolated and reusable parts, which combine view logic and data. We can combine multiple components to create a page and it helps us to make complicated app. There are two types to make components, class components and function components.

2. What's wrong with this code?
```
function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

'myComponent' isn't rendered in this code, so 'myComponent' isn't seen in HTML.
It is required to add this line at the end of the code.
```
ReactDOM.render(<myComponent />, document.getElementById('root'));
```

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

The last line to render 'Header' component is different.
Component is written by using similar syntax as normal HTML, such as like <component name />.
The last line should be changed as below.
```
ReactDOM.render(<Header />, document.getElementById("root"));
```