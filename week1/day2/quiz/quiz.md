1. What is a React component?
<<<<<<< HEAD

React Component is a reusable code chunk. Those are independent and can be used in React.
=======
- A function that returns React elements.(UI+logic)
- Reusable, maintainable, 
>>>>>>> origin/master

2. What's wrong with this code?
```
function MyComponent() {
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

<<<<<<< HEAD
ReactDOM.render(Header(), document.getElementById("root"))
```
`header` tag should be wrapped with JSX element, and then use `<Header />` instead of Header() under the render statement.

=======
ReactDOM.render(<Header />, document.getElementById("root"))
```
>>>>>>> origin/master
