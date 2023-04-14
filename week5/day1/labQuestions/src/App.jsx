import './App.css'
import ForwardingRefs from './Components/LabQuestions/ForwardingRefs';
import ErrorBoundaries from './Components/LabQuestions/ErrorBoundaries';
import PureComponent from './Components/LabQuestions/PureComponent';
import CompoundComponents from './Components/LabQuestions/CompoundComponents';

function App() {

  return (
    <div className="App">
      <ForwardingRefs />
      <hr/>
      <ErrorBoundaries />
      <hr/>
      <PureComponent />
      <hr/>
      <CompoundComponents />
    </div>
  )
}

export default App
