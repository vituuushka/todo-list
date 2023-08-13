import s from './Task.module.css'

const Task = (props:any) => {
    return <div>
        <button onClick={async () => {
            await props.onRemoveTask(props.task.id)
            }} uk-icon="icon: trash"></button>
        <input type='checkbox'  />
        <span>{props.task.message}</span>
    </div>
}

export default Task