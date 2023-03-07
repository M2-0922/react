function MyComponent(){
    return (
        <small>I'm tiny text!</small>
    );
}
let root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<MyComponent />);

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
                <h1>aiu</h1>
            </nav>
        </header>
    )
}

ReactDOM.render(<Header />, document.getElementById("root2"));

