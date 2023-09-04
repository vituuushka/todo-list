import s from './Task.module.css'
import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import { useRef } from 'react'

const Task = (props:any) => {
const [editMode, setEditMode] = useState(false)
const [draftMessage, setDraftMessage] = useState('')
const activateEditMode = () => {
    setEditMode(true)
}
const deactivateEditMode = (taskId: string, draftMessage: string) => {
    props.updateTaskMessage(taskId,draftMessage)
    setEditMode(false)
}
const taskValue = useRef(null)
const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
const text = e.target.value
setDraftMessage(text)
}
    return <div>
        {
        editMode ? 
        <div>
                <input ref={taskValue} onChange={onTextChange} autoFocus={true} value ={draftMessage || props.task.message  } ></input>
                <button onClick={()=> deactivateEditMode(props.taskId, draftMessage)} className="large material-icons">check</button>
            </div>
        : <div>
        <button onClick={async () => {
            await props.onRemoveTask(props.taskId)
            }} uk-icon="icon: trash"></button>
            <label>
                <input type='checkbox' checked={!!props.isDone} onChange={async(e) => {
            await props.onChangeStatus(props.taskId,props.isDone)}}  />
            <span onDoubleClick={activateEditMode} >{props.task.message}</span>
            </label>
            </div>
        }
    </div>
}

export default Task