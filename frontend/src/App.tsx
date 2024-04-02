import './App.css'
import InputField from './components/InputField';
import TaskList from './components/TaskList';

function App() {

  


  return (
    <div className="h-screen flex items-center flex-col bg-gradient-to-r from-purple-500 to-purple-900 font-sans">
      <h1 className="text-6xl mt-32 text-slate-100">My To-Do</h1>
      <InputField/>
      <TaskList/>
    </div>
  )
}

export default App
