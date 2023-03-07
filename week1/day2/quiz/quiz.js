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


// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <Header />
// )
ReactDOM.render(<Header />, document.getElementById("root"));