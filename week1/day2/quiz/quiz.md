1. What is a React component?
It is a reusable piece of code that describes the UI of an application


2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

The first letter of the function should be uppercase

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

the function should be called like this: 

```
ReactDOM.render(<Header />, document.getElementById("root"))
```