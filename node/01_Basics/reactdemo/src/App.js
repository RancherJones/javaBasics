
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterFunc from './components/CounterFunc';
import Vote from './components/Vote';



function App() {
  
  return (
    <div className="App">
      <h1>Helo</h1>
      <div class="container">
        <Vote candidate="Sepp" address="Dornbirn"/>
        <Vote candidate="John" address="Hohenems"/>
        <Vote candidate="Ella" address="Altacj"/>

        
      </div>
      <div>functional components
        <Counter/>
        <CounterFunc/>
      </div>
      
    </div>

  );
}

export default App;
