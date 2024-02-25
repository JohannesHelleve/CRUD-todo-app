import './App.css'
import useFetchData from './FetchData'
import Task from './Task';
import InputTask from './InputTask';

function App() {
  const { data, loading, error } = useFetchData();

  


  return (
    <>
        <div>
          <InputTask/>       
          <p>
            {error && <div>There was an error</div>}
            {loading && <div>Loading...</div>}
            {data.map((item) => (
              <Task key={item.id} task={item.task}/>
            ))
            }
          </p>
        </div>
    </>
  )
}

export default App
