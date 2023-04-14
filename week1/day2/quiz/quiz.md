1. What is a React component?
   Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

2. What's wrong with this code?

```
function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

myComponent should be MyComponent

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

```
ReactDOM.render(Header(), document.getElementById("root"))
```

should be

```
ReactDOM.render(<Header />, document.getElementById("root"))
```
