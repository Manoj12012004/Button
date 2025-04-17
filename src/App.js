import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
    <Button type="primary" onClick={() => alert('Primary Button clicked!')}>
      Primary Button
    </Button>
    <Button type="secondary" onClick={() => alert('Secondary Button clicked!')}>
      Secondary Button
    </Button>
    <Button disabled>Disabled Button</Button>
    </div>
  );
}

export default App;
