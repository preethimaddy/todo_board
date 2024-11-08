import './App.css';
import Input from './component/Input';
import { useState } from 'react';

function App() {
  const[taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
  <>
  <h1>ToDo_Board</h1>
  <Input taskList={taskList} setTaskList={setTaskList}/>
  <div>
   {taskList.map((task,index)=>
  <li key={index}>
    {task}
  </li>)}
  </div>
  </>
  );
}

export default App;
