import { toast } from "react-toastify";




const Taskform = ({ setformData, formData, setTasks }) => {

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setformData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setTasks((prev) => {
            return [
                ...prev,
                formData,
            ]
        })
        toast.success('Add Task!');
        setformData({
            task: '',
            description: '',
        })

    }


    return (

        <div className="ml-[10%] bg-slate-700 mt-2 w-4/5 rounded-xl px-5 py-6">
            <form onSubmit={submitHandler} className="flex justify-between">
                <input
                    type="text"
                    placeholder="Enter task here..."
                    name="task"
                    onChange={changeHandler}
                    value={formData.task}
                    className="text-lg w-4/12 placeholder:text-zinc-700 text-zinc-900 py-2 rounded-lg bg-zinc-300 border border-b-zinc-900"
                />
                <input
                    type="text"
                    placeholder="Enter description here..."
                    name="description"
                    onChange={changeHandler}
                    value={formData.description}
                    className="text-lg w-2/5 py-2 placeholder:text-zinc-700 rounded-lg bg-zinc-300 border border-b-zinc-900"
                />
                <button className="text-white bg-zinc-900 px-8 px-2 rounded-xl font-semibold">Add Task</button>
            </form>
        </div>
    )
}

export default Taskform