
// function sum (a, b){
//     return a + b;
// }

// function callLogs(){
//     console.log("This is a function call");
//     console.log("This is a function call");
//     console.log("This is a function call");
//     console.log("This is a function call");
//     console.log("This is a function call");
// }

// console.log(sum(1, 2));
// console.log(sum(1, 4));
// console.log(sum(3, 5));

// callLogs();

let element = <h1>Hello World</h1>; // this is the jsx way to write element;
let page = 
<div>
    <header>
        <nav>
            {/* <img src="/images/react-logo.png" alt="" /> */}
            <h1>Logo</h1>
        </nav>
    </header>

    <main>
        This is main part
    </main>

    <footer>
        <small>&copy; by m20922</small>
    </footer>
</div>


// ReactDOM.render(page, document.getElementById("root")); // React v17

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element) // React v18

function Header(){
    return (
        <header>
            <nav className="nav">
                <img className="nav--logo" src="./src/react-logo.png" alt="" />
                <ul className="nav--list">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.

- Move the `h2` and `ul` together into another component
  called "MainContent" and render inside Page as well.

*/

function Footer(){
    return(
        <footer>
            <small>&copy; by m20922</small>
        </footer>
    )
}

function MainContent(){
    return (
        <main>
            <h2>Fun facts about React</h2>
            <ul>
                <li>Was first realeased in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on Github</li>
            </ul>
        </main>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />) // React v18