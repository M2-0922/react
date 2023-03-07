function Header() {
    return (
        <header className="header">
            <img className="header--logo" src="./src/react-logo.png" alt="" />
            <h1 className="header--title">ReactFacts</h1>
        </header>
    )
}

function MainContent(){
    return (
        <main className="main">
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

function Page(){
    return (
        <>
            <Header />
            <MainContent />
        </>
    );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />)