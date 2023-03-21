1. What is a React component?
   <<<<<<< HEAD

   # A function and a class which can contain multiple HTML elements and are reusable for similar contents.

- A function that returns React elements.(UI+logic)
- Reusable, maintainable,
  > > > > > > > 49a23483847a205473be0afa4bdfe923971f9b1b

2. What's wrong with this code?

```
function MyComponent() {
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
