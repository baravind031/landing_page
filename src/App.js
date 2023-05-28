import Navbar from './nav/navbar';
import Content from './content/bodycontent';
import  './content/bodycontent.scss';
import './nav/navbar.scss';
 
 

function App() {
  return (

    <div>
    <Navbar />
    <Content/>
  </div>


    // <div className="App">
      // <header className="App-header">
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p> 
      //     Learn React
      // </header> 
    // </div>
  );
}

export default App;
