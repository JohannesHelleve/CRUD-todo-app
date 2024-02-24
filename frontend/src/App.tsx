import { useState } from 'react'
import './App.css'
import useFetchData from './FetchData'
import Task from './Task';

function App() {
  const { data, loading, error } = useFetchData();
  const [todos, setTodos] = useState<string>("");

  function handleAdd() {
  }


  return (
    <>
        <div>
          <input type="text" value={todos} onChange={(e) => setTodos(e.target.value)}/>
          <button onClick={handleAdd}>Add</button>
          <p>{todos}</p>
        
          <p>
            {error && <div>There was an error</div>}
            {loading && <div>Loading...</div>}
            {data.map((item) => (
              <Task key={item.id} task={item.task} />
            ))
            }
          </p>
        </div>
    </>
  )
}

export default App
