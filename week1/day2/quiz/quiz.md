1. What is a React component?
    A React component is similar to a function, where it groups a bunch of code for a component, like a navbar or footer. You can call it so you don't need to repeat code.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
    it needs some sort of wrapper, like div or semantic elements like article 

    function myComponent() {
    return (
        <div>
            <small>I'm tiny text!</small>
        </div>
    )
}

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
ReactDOM.render(<Header />, document.getElementById("root"))

calling the Header function wrong
