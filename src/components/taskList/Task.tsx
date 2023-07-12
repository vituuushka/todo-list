const Task = (props:any) => {
    return <div>
        <input type='checkbox'  />
        <span>{props.task.message}</span>
    </div>
}

export default Task