1. What is a React component?
   A React component is a reusable building block for building user interfaces.

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

Answer

`myComponent` should be `MyComponent` and need the code below to render.

```
ReactDOM.render(<MyComponent />, document.getElementById('root'));
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

Answer

`<Header />` instead of Header()

```
ReactDOM.render(<Header />, document.getElementById("root"));
```
