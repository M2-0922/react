// const myDiv = React.createElement(
//   "div",
//   { className: "my-class" },
//   React.createElement("h1", null, "Heading"),
//   React.createElement("p", null, "Lorem ipsum bla bla")
// );

// const NavBar = React.createElement(
//   "nav",
//   null,
//   React.createElement(
//     "ul",
//     null,
//     React.createElement(
//       "li",
//       null,
//       React.createElement("a", { href: "https://google.com" }, "Home")
//     )
//   ),
//   React.createElement("ul", null, React.createElement("li", null, "Contact")),
//   React.createElement("ul", null, React.createElement("li", null, "About"))
// );

// function handleClick() {
//   console.log("Discovering...");
// }

// const Hero = React.createElement(
//   "div",
//   { className: "container" },
//   React.createElement("h1", { className: "title" }, "Hello React"),
//   React.createElement(
//     "p",
//     { className: "paragraph" },
//     "This is the way of using React.createElement"
//   ),
//   React.createElement("button", { onClick: handleClick }, "Discover")
// );

// const HeroJSX = (
//   <div className="container">
//     <h1 className="title">Hello React</h1>
//     <p className="paragraph">This is the way of using JSX</p>
//     <button onClick={handleClick}>Discover</button>
//   </div>
// );

// JSX way to create element on DOM.

// let element = <div className="my-class">
//     <h1>Heading 1</h1>
//     <p>Lorem ipsum bla bla</p>
// </div>;

// Render the element on Virtual React DOM.

const landingPage = React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "nav",
    null,
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, React.createElement("h3", null, "Logo")),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "#home" }, "Home")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "#about" }, "About")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "#contact" }, "Contact")
      )
    )
  ),
  React.createElement(
    "main",
    null,
    React.createElement(
      "section",
      null,
      React.createElement("h1", { id: "title" }, "Hello World"),
      React.createElement(
        "p",
        { id: "paragraph" },
        "This is first React Application"
      ),
      React.createElement("button", { className: "btn btn-dark" }, "Click me")
    ),
    React.createElement(
      "section",
      { id: "article" },
      React.createElement(
        "article",
        null,
        React.createElement("h3", null, "Item One"),
        React.createElement(
          "p",
          null,
          "Nulla amet fugiat nostrud sint nulla aute est."
        )
      ),
      React.createElement(
        "article",
        null,
        React.createElement("h3", null, "Item Two"),
        React.createElement(
          "p",
          null,
          "Nulla amet fugiat nostrud sint nulla aute est."
        )
      ),

      React.createElement(
        "article",
        null,
        React.createElement("h3", null, "Item Three"),
        React.createElement(
          "p",
          null,
          "Nulla amet fugiat nostrud sint nulla aute est."
        )
      ),
      React.createElement(
        "article",
        null,
        React.createElement("h3", null, "Item Four"),
        React.createElement(
          "p",
          null,
          "Nulla amet fugiat nostrud sint nulla aute est."
        )
      )
    )
  )
);

//

// translate jsx code to react.createElement code.
// code here

ReactDOM.render(landingPage, document.getElementById("root"));
