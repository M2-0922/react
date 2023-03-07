// (): bracket
// []: square brackets
// {}: curly brackets
// <>: angle brackets

sementi

function Page() {
    // don't need div in this place
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // don't need div in this place
    <>
        <Page />
        <Page />
        <Page />
        <Page />
    </>
);