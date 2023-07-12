import Pagination from '../pagination/Pagination'
import Task from './Task'
import s from './TaskList.module.css'

const TaskList = (props: any) => {
  const lastTaskIndex = props.currentPage * props.pageSize
    const firstTaskIndex = lastTaskIndex-props.pageSize
    const currentTasks = props.tasks?.slice(firstTaskIndex,lastTaskIndex)
    return <div>
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Task list</a>
    </div>
  </nav>
  <div className={s.tasks} >
        {props.tasks?.map((t:any)=> <Task key={t.id} task={t} />
      )}
      </div>
      <Pagination onPageChanged={props.onPageChanged} pageSize={props.pageSize}
       totalTasksCount={props.total} currentPage={props.currentPage}
       setCurrentPage={props.setCurrentPage} />
    </div>
}

export default TaskList