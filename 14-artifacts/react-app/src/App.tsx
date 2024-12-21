import React from 'react';
import logo from './logo.svg'; // Correct import path for the logo.svg file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Other content */}
      </header>
    </div>
  );
}

export default App;
