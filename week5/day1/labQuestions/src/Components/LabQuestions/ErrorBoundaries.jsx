// Lab question 2
// Create an error boundary component that displays a message when an error occurs in its child components.
// Use the error message as part of the message.

import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false};
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <div>Some Error happens!</div>;
        }
        return this.props.children;
    }
}

function ErrorChild() {
    throw new Error("Error!");
}

function ErrorBoundaries() {
    return(
        <ErrorBoundary>
            <ErrorChild />
        </ErrorBoundary>
    )
}

export default ErrorBoundaries