import { ChangeEvent, useRef } from 'react'
import Pagination from '../pagination/Pagination'
import Task from './Task'
import s from './TaskList.module.css'

const TaskList = (props: any) => {
  const lastTaskIndex = props.currentPage * props.pageSize
    const firstTaskIndex = lastTaskIndex-props.pageSize
    const currentTasks = props.tasks?.slice(firstTaskIndex,lastTaskIndex)

    const taskValue = useRef(null)
    const onUpdateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let text = e.currentTarget.value
      props.updateTaskText(text)
    }
    const onAddNewTask = async  () => {
      await props.addNewTask(props.newTaskText)
      await props.onPageChanged(1)
    }
    const onRemoveTask = async  (taskId: string) => {
      await props.removeTask(taskId)
      await props.onPageChanged(1)
    }
    const onChangeStatus = (taskId: string, isDone: boolean ) => {
      props.changeDoneStatus(taskId, isDone)
    }
    return <div>
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Task list</a>
    </div>
  </nav>
  <div>
    <textarea ref = {taskValue} value={props.newTaskText} onChange={onUpdateText} ></textarea>
    <button onClick={onAddNewTask} >ADD TASK</button>
  </div>
  <div className={s.tasks} >
        {props.tasks?.map((t:any)=> <Task key={t.id} taskId={t.id} task={t}
        onRemoveTask={onRemoveTask} isDone={t.isDone} 
        onChangeStatus={onChangeStatus} updateTaskMessage={props.updateTaskMessage}
        />
      )}
      </div>
      <Pagination onPageChanged={props.onPageChanged} pageSize={props.pageSize}
       totalTasksCount={props.total} currentPage={props.currentPage} />
    </div>
}

export default TaskList