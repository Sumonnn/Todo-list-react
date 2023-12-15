import { TiDeleteOutline } from "react-icons/ti";



const Task = ({ task, removeTask, key }) => {
  return (
    <div className="bg-slate-400 w-1/3 flex items-center justify-between rounded-3xl px-10 py-3 text-zinc-900 mt-3 ml-[33.3%]">
      <span>
        <h1 className="font-semibold text-xl capitalize">{task.task}</h1>
        <p className="w-[85%] opacity-70">{task.description}</p>
      </span>
      <button className="text-4xl text-red-700"
      onClick={()=> removeTask(key)}><TiDeleteOutline /></button>
    </div>
  )
}

export default Task