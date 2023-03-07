1. What is a React component?

React Component is a reusable code chunk. Those are independent and can be used in React.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
`small` tag should be wrapped with JSX fragment

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
`header` tag should be wrapped with JSX element, and then use `<Header />` instead of Header() under the render statement.

