1. What is a React component?

   A function and a class which can contain multiple HTML elements and are reusable for similar contents.

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

    A React component's name needs to start with a uppercase letter.

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

    The Header component should be called with less-than and greater-than signs instead of with parentheses
