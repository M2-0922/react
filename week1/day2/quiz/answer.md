1. What is a React component?
```
Answer:
A React component is a reusable set of codes. It can be defined as a function or a class.
```


2. What's wrong with this code?
```js
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
```
Answer:
Don't know... :( You have to render it at the end but there's no rendering here, is that the problem?
```

3. What's wrong with this code?
```js
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
You should replace the last line of the codes with the following:
```
```js
ReactDOM.createRoot(document.getElementById('root')).render(<Header />)
```