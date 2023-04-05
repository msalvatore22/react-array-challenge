import { useState } from 'react';
import './App.css';


function App() {
  const [cells, setCells] = useState(["a", "b", "c"])

  const handleCellChange = (newCellValue, idx) => {
    setCells((prevCells) => 
      prevCells.map((cell, i) => (i === idx ? newCellValue : cell))
    )
  }

  const handleAddCell = (idx) => {
    setCells((prevCells) => 
      [
        ...prevCells.slice(0, idx+1),
        "-",
        ...prevCells.slice(idx + 1)
      ]
    )
  }

  const combinedCells = cells.join("")

  return (
    <div className="App">
      <div className="cell-container">
        {cells.map((cell, idx) => {
          return (
            <div key={idx} className='cell'>
              <input 
                className='cell-input'
                value={cell}
                onChange={(e) => handleCellChange(e.currentTarget.value, idx)}
              >
              </input>
              <span className='add-cell-span' onClick={() => handleAddCell(idx)}>{""}</span>
            </div>
          )
          
        })}
        
      </div>
      <p>{combinedCells}</p>
    </div>
  );
}

export default App;
