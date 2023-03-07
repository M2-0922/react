// function sum (a, b){
//   return a + b;
// }

// function calllogs() {
//   console.log("This is a function call");
// }

// console.log(sum(1,2));

// calllogs;

let element = <h1>Hello World!</h1>;
let page = <div>
  <header>
    <nav>
      <img src="./images/FX-logo 1.png" alt=""/>
      <h1>Logo</h1>
    </nav>
  </header>
  <main>
    This is main part
  </main>
  <footer>
    <small>&copy; by nami</small>
  </footer>
</div>

//React v17
// ReactDOM.render(page, document.getElementById("root")); 
//かっこの1つめ(変数指定)のとことは1個しか入れれない。

//React v18
// ReactDOM.createRoot(document.getElementById("root")).render(page);

function Header(){
  return (
    <header>
      <nav>
        <img className="nav--logo" src="./images/FX-logo 1.png" alt=""/>
        <h1>Logo</h1>
      </nav>
    </header>
  )
}

function MainContent(){
  return (
    <main>
      <h2>Fun facts about React</h2>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K atars on Github</li>
      </ul>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>&copy; by nami</small>
    </footer>
  )
}


function Page() {
  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

//Another way to display with v18
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);