// final name = "Joe";

// let element = React.createElement("h1", null, "Hello React!");
// console.log(element);

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "null", 
        children: "Hello React!"
    }, 
    _owner: null, 
    _store: {}
}
 */

// vanilla js to create element

// const headTitle = document.createElement("h1");
// headTitle.innerHTML = "Heading";
// headTitle.addEventListener.apply.

// React.createElement to create element on DOM.

const myDiv = React.createElement(
    "div",
    { className: "my-class" },
    React.createElement("h1", null, "Heading"),
    React.createElement("p", null, "Lorem ipsum bla bla")
);

const NavBar = React.createElement(
    "nav",
    null,
    React.createElement("ul", null, React.createElement("li", null,
        React.createElement("a", { href: "https://google.com" }, "Home"))),
    React.createElement("ul", null, React.createElement("li", null, "Contact")),
    React.createElement("ul", null, React.createElement("li", null, "About"))
)

function handleClick() {
    console.log("Discovering...");
}

const Hero = React.createElement("div", { className: "container" },
    React.createElement("h1", { className: "title" }, "Hello React"),
    React.createElement("p", { className: "paragraph" }, "This is the way of using React.createElement"),
    React.createElement("button", { onClick: handleClick }, "Discover")
)

const HeroJSX = <div className="container">
    <h1 className="title">Hello React</h1>
    <p className="paragraph">This is the way of using JSX</p>
    <button onClick={handleClick}>Discover</button>
</div>;

// JSX way to create element on DOM.

// let element = <div className="my-class">
//     <h1>Heading 1</h1>    
//     <p>Lorem ipsum bla bla</p>
// </div>;

// Render the element on Virtual React DOM.

const landingPage =
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

// translate jsx code to react.createElement code.
// code here 

const landingPageReact = React.createElement("div", { className: "container" },
    React.createElement("nav", null, React.createElement("ul", null,
        React.createElement("li", null, React.createElement(("h3", null,
            React.createElement("a", { href: "#home" }, "Home"))),
            React.createElement("li", null,
                React.createElement("a", { href: "#about" }, "About"))),
        React.createElement("li", null,
            React.createElement("a", { href: "#contact" }, "contact")))
    ),

    React.createElement("main", null,
        React.createElement("section", null,
            React.createElement("h1", { id: "title" }, "Hello world"),
            React.createElement("p", { id: "paragraph" }, "This is first React Application"),
            React.createElement("button", { classname: "btn-dark" }, "Click me")),

        React.createElement("section", { id: "article" },

            React.createElement("article", null,
                React.createElement("h3", { id: "title" }, "Item one"),
                React.createElement("p", null, "Nulla amet fugiat nostrud sint nulla aute est.")),

            React.createElement("article", null,
                React.createElement("h3", { id: "title" }, "Item Two"),
                React.createElement("p", null, "Nulla amet fugiat nostrud sint nulla aute est.")),

            React.createElement("article", null,
                React.createElement("h3", { id: "title" }, "Item Three"),
                React.createElement("p", null, "Nulla amet fugiat nostrud sint nulla aute est.")),

            React.createElement("article", null,
                React.createElement("h3", { id: "title" }, "Item Four"),
                React.createElement("p", null, "Nulla amet fugiat nostrud sint nulla aute est."))
        )
    )
)




ReactDOM.render(jxtTranspile, document.getElementById("root"));