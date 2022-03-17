
import './App.css';
import Vote from './components/Vote';



function App() {
  return (
    <div className="App">
      <h1>Helo</h1>
      <Vote candidate="Sepp" address="Dornbirn"/>
      <Vote candidate="John" address="Hohenems"/>
      <Vote candidate="Ella" address="Altacj"/>
    </div>
  );
}

export default App;
