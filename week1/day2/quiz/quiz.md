1. What is a React component?
    Independent and reusable bits of code.Lets us split the UI into independent, reusable pieces and think about each piece in isolation.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The name if the function should start with capital letter.

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
let root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Header/>)
