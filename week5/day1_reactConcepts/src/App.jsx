import React from 'react';
import Form from './components/Lab4';

function App() {
  const handleSubmit = formData => {
    // Handle the form submission here
    console.log(formData);
  };

  return (
    <div>
      <h1>My Form</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
