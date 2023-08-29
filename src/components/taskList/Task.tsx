import s from './Task.module.css'

const Task = (props:any) => {
    return <div>
        <button onClick={async () => {
            await props.onRemoveTask(props.taskId)
            }} uk-icon="icon: trash"></button>
            <label>
                <input type='checkbox' checked={!!props.isDone} onChange={async(e) => {
                debugger 
                console.log(e)
                await props.onChangeStatus(props.taskId,props.isDone)}}  />
            <span>{props.task.message}</span>
            </label>
    </div>
}

export default Task