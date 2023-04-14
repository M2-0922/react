// `Lab question 2`:
//  Create an error boundary component that displays a message when an error occurs in its child components. 
// Use the error message as part of the message.

import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMsg: "" };
    }

    static getDerivedStateFromError(error) {
        // console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // console.error(error);
        // console.error(errorInfo);
        this.setState(prevState => ({
            hasError: prevState.hasError,
            errorMsg: `
                ${error} ${errorInfo.componentStack}
            `
        }))
    }

    render() {
        if (this.state.hasError) {
            return <div>{this.state.errorMsg}</div>;
        }
        return this.props.children;
    }
}

function Child() {
    throw new Error("Error!");
    // return <div>Hello, world!</div>
}

const Lab2 = () => {
    return (
        <ErrorBoundary>
            <Child />
        </ErrorBoundary>
    );
}

export default Lab2;