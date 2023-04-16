// Lab question 2: Create an error boundary component that displays a message when an error occurs in its child components. Use the error message as part of the message.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}

function Child() {
  throw new Error("Error!");
}

function App() {
  return (
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );
}