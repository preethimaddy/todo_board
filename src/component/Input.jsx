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
    <form>
        <input 
        className='border rounded px-2'
        type='text'
        placeholder='Add a task'
        value={input}
        onChange={handleChange}
        // onChange={(e)=> setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
    </form></>
  )
}

export default Input