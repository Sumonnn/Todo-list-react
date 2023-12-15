import Task from "./Task"




const ShowTask = (props) => {

    const removeTask = props.removeTask;
    return (
        <>
            {
                props.Tasks.map((task, index) => {
                    return <Task removeTask={removeTask} key={index} task={task} />
                })
            }
        </>

    )
}

export default ShowTask