import {useState, useEffect} from 'react';
import './App.css';
import ProgressBar from './components/progressbar';

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {

    return () => {
      
    }
  }, [progress]);
  return (
    <div className="App">
      <ProgressBar value={progress}/>
    </div>
  );
}

export default App;
