import React from 'react'

const Board = ({task,index,taskList, setTaskList}) => {

    const handleDelete =()=>{
let removeTaskIndex = taskList.indexOf(task);
taskList.splice(removeTaskIndex,1);
setTaskList((currentTask =>currentTask.filter(todo=> index === removeTaskIndex)))
    }
  return (
    <>
    <div className="max-w-md rounded-xl  flex flex-col items-center justify-start border text-center text-lg pt-3 pb-4 px-4 md:px-5">
    <p>{task}</p>
    <button className='bg-red-500 text-white rounded-lg px-2 py-1 mt-4'
    onClick={handleDelete}>
        Delete
    </button>
    </div>
    </>
  )
}

export default Board