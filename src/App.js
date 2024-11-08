import './App.css';
import Input from './component/Input';
import { useState } from 'react';
import Board from './component/Board';
function App() {
  const[taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
  <>
  <div className='px-12'>
  <div className='flex flex-col items-center justify-center py-8 gap-4'>
  <h1 className='text-xl font-semibold'>ToDo_Board</h1>
  <Input taskList={taskList} setTaskList={setTaskList}/>
  </div>
  <div className='flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
   {taskList.map((task,index)=>
 <Board 
 key={index}
 task={task}
 index={index}
 taskList={taskList}
 setTaskList={setTaskList}
 />
 )}
  </div>
  </div>
  </>
  );
}

export default App;
