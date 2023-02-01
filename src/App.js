
import './App.css';

import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>

      <div className='mb-5'>
        <h1 className='head'>Counter</h1>
      </div>

  <div className="card border-dark bg-light text-center mb-4 w-50">
    <h1 className="card-body text-primary">{count}</h1>
  </div>

  <div className="d-flex ">
    <button className="btn btn-outline-success m-2 btn-equal" onClick={() => { setCount(count + 1) }}>+</button>
    <button className="btn btn-outline-warning m-2 btn-equal" onClick={() => { setCount(count > 0 ? count - 1 : 0) }}>-</button>
    <button className="btn btn-outline-danger m-2 btn-equal" onClick={() => { setCount(0) }}>reset</button>
  </div>

</div>
  
  )
}





export default App;


