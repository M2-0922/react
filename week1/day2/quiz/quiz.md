1. What is a React component?

React is a JavaScript library for building UI parts on website. And component desplaed on the screen in React that has data and functions. 


2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}

->
function MyComponent() {
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

ReactDOM.render(Header(), document.getElementById("root"))

-> ReactDOM.render(<Header />, document.getElementById(""root))
```