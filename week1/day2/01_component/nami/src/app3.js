function Header(){
  return (
    <header className="header">
      <img className="header--logo" src="./images/FX-logo 1.png" alt="" />
      <h1 className="header--title">ReactFatcs</h1>
    </header>
  );
}

function MainContent(){
  return (
    <main className="main">
      <h2 className="main--title">Fun facts about React</h2>
      <ul className="main--list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan</li>
        <li>Has well over 200K atars on Github</li>
      </ul>
    </main>
  )
}

function Page() {
  return(
    <>
    <Header />
    <MainContent />
    </>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Page />
)