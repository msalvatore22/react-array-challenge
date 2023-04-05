import { useState } from 'react';
import './App.css';


function App() {
  const [cells, setCells] = useState(["a", "b", "c"])

  const handleCellChange = (newCellValue, idx) => {
    setCells((prevCells) => 
      prevCells.map((cell, i) => (i === idx ? newCellValue : cell))
    )
  }

  const combinedCells = cells.join("")

  return (
    <div className="App">
      <div className="cell-container">
        {cells.map((cell, idx) => {
          return <input 
            className='cell' 
            key={idx} 
            value={cell}
            onChange={(e) => handleCellChange(e.currentTarget.value, idx)}
          ></input>
        })}
      </div>
      <p>{combinedCells}</p>
    </div>
  );
}

export default App;
