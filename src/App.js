import './App.css';
import Input from './component/Input';
import { useState } from 'react';

function App() {
  const[taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
  <>
  <div className='flex flex-col items-center justify-center py-8'>
  <h1 className='text-xl font-semibold'>ToDo_Board</h1>
  <Input taskList={taskList} setTaskList={setTaskList}/>
  <div>
   {taskList.map((task,index)=>
  <li key={index}>
    {task}
  </li>)}
  </div>
  </div>
  </>
  );
}

export default App;
