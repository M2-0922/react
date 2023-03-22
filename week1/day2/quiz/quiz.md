1. What is a React component?
<<<<<<< HEAD
=======
- A function that returns React elements.(UI+logic)
- Reusable, maintainable, 
>>>>>>> master

2. What's wrong with this code?

```
function MyComponent() {
<<<<<<< HEAD
    return (
        <small>I'm tiny text!</small>
    )
}
ans = function name should be in capital letter
function MyComponent() {
=======
>>>>>>> master
    return (
        <small>I'm tiny text!</small>
    )
}
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

ReactDOM.render(<Header />, document.getElementById("root"))
<<<<<<< HEAD
```

ans = ReactDOM.render(<Header />, document.getElementById("root"))
=======
```
>>>>>>> master
