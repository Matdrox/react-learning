// import React from 'react';  // Class Based
import Header from './components/Header';

// FUNCTION BASED
const App = () => {
  const name = 'Matei';
  const x = true;
  return (
    <div className='container'>
      <h1>Hello</h1>
      <h2>
        Hello {name}, {x ? 'Yes' : 'No'}!
      </h2>
      <Header title='This is a prop'/>
    </div>
  );
}

// CLASS BASED
// class App extends React.Component {
//   render() {
//     return <h1>Hello from class</h1>
//   }
// }

export default App;
