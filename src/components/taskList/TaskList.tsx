import s from './TaskList.module.css'

const TaskList = (props: any) => {
    return <div>
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Task list</a>
    </div>
  </nav>
  <div className={s.tasks} >
        {props.tasks.map((t:any)=> ( 
        <div key={t}>
        <span>{t.message}</span>
        </div>
      ))}
      </div>
    </div>
}

export default TaskList