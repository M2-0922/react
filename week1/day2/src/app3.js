function Header() {
    return (
        <header className="header">
            <img className="header--logo" src="" alt=""></img>
            <h1 className="header--title">ReactFacts</h1>
        </header>
    )
}

function MainContent() {
    return (
        <main className="main">
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--list">
                <li>Laborum nisi ullamco laboris pariatur culpa.</li>
                <li>Laborum nisi ullamco laboris pariatur culpa.</li>
                <li>Laborum nisi ullamco laboris pariatur culpa.</li>
                <li>Laborum nisi ullamco laboris pariatur culpa.</li>
                <li>Laborum nisi ullamco laboris pariatur culpa.</li>
            </ul>
        </main>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
        </>
    );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);