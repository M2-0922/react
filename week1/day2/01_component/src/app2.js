function Page(){
    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}

// semantic html elements
// header
// nav
// main
// section
// article
// footer
// aside

function Navbar(){
    return(
        <nav>
            <h1>Logo</h1>
        </nav>
    )
}

function MainContent(){
    return (
        <main>
            <h1>Content</h1>
        </main>
    )
}

// function createElement()

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Page />
        <Page />
        <Page />
        <Page />
        <Page />
    </>
)