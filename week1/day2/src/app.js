const element = 
<div className="container">
    <nav>
        <ul>
            <li>
                <h3>LOGO</h3>
            </li>
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
    <main>
        <section>
            <h1 id="title">Hello World</h1>
            <p id="paragraph">This is first React Application</p>
            <button className="btn btn-dark">Click me</button>
        </section>

        <section id="article">
            <article>
                <h3>Item One</h3>
                <p>Nulla amet fugiat nostrud sint nulla aute est. </p>
            </article>
            <article>
                <h3>Item Two</h3>
                <p>Nulla amet fugiat nostrud sint nulla aute est. </p>
            </article>
            <article>
                <h3>Item Three</h3>
                <p>Nulla amet fugiat nostrud sint nulla aute est. </p>
            </article>
            <article>
                <h3>Item Four</h3>
                <p>Nulla amet fugiat nostrud sint nulla aute est. </p>
            </article>
        </section>
    </main>
</div>

// ***OLD WAY***
// ReactDOM.render(landingPage, document.getElementById("root"));

// ***NEW WAY***
// ReactDOM.createRoot(document.getElementById("root")).render(element);
// ↓
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

function Header() {
    return (
        <header>
            <nav className="nav">
                <img></img>
                <ul className="nav--list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h2>Fun facts about React</h2>
            <ul>
                <li>Was first released in 2013</li>
                <li>...</li>
                <li>...</li>
            </ul>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>&copy; by React</small>
        </footer>
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

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);