import React,{useState}from 'react'

const Input = ({taskList, setTaskList}) => {
  const[input, setInput] = useState("");
  
  console.log(input);
  const handleChange =(e)=>{
    setInput(e.target.value); 
  }
  const handleAddTask = (e) =>{
    e.preventDefault();
    if (input.trim() === "") return; // Check if input is empty or just whitespace
    setTaskList([...taskList, input]);
    setInput(""); //clear the input value
  }
  return (
  <>
    <form className='flex flex-row items-center gap-3'>
        <input 
        className='border rounded py-1.5 px-2.5 text-lg'
        type='text'
        placeholder='Add a task'
        value={input}
        onChange={handleChange}
  
        />
        <button
        className='bg-violet-400 text-white py-2  px-3.5 rounded font-semibold hover:opacity-70%'
         onClick={handleAddTask}>Add</button>
    </form></>
  )
}

export default Input