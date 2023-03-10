1. What is a React component?
```
Answer:
 It's like a function that return HTML element and also  independent and reusable bits of code. 
 It serves the same purpose as JavaScript function, but work in isolation and return HTML.
```
- A function that returns React elements.(UI+logic)
- Reusable, maintainable, 

2. What's wrong with this code?
```
function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
```
Answer:
Always start component names with a capital letter.
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
```
Answer:
ReactDOM.render(<Header />, document.getElementById("root"));
```