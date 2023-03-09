1. What is a React component?
<<<<<<< HEAD

React is a JavaScript library for building UI parts on website. And component desplaed on the screen in React that has data and functions. 

-A function that returns react elements(UI+logic)
-Reusable, maintainable

=======
- A function that returns React elements.(UI+logic)
- Reusable, maintainable, 
>>>>>>> master

2. What's wrong with this code?
```
function MyComponent() {
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

<<<<<<< HEAD
ReactDOM.render(Header(), document.getElementById("root"))

-> ReactDOM.render(<Header />, document.getElementById(""root))
=======
ReactDOM.render(<Header />, document.getElementById("root"))
>>>>>>> master
```