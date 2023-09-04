import TaskList from "./TaskList"
import React from "react"
import { connect, useDispatch } from "react-redux"
import { getTasks } from "../../react-redux/tasks-reducer"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { UseActions } from "../hooks/useActionCreators"
import Preloader from "../preloader"
const { useEffect} = React

const TaskListContainer = () => { 
    const state = useTypedSelector(state => state.tasksPage)
    const {getTasks,setCurrentPage, updateTaskText, 
        addNewTask, removeTask, changeDoneStatus, updateTaskMessage} = UseActions()
    useEffect (() => {
        getTasks(state.currentPage,state.pageSize)
    },[])
    
    const onPageChanged = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        getTasks(pageNumber,state.pageSize)

    }
    if(state.loading) {
        return <Preloader/>
    }
    const propsForComponent = {
        ...state,
        getTasks,
        setCurrentPage, 
        updateTaskText, 
        addNewTask, 
        removeTask,
        changeDoneStatus,
        updateTaskMessage,
        onPageChanged: onPageChanged,
        
    }
    return <TaskList {...propsForComponent} />
}


// const mapStateTostate = (store: any) => {
    
// return {
//     currentPage: store.tasksPage.currentPage,
//     pageSize: store.tasksPage.pageSize,
//     tasks: store.tasksPage.tasks,
//     total: store.tasksPage.total,
//     newTaskText: store.tasksPage.newTaskText
// }
// }
export default TaskListContainer
// export default connect(mapStateTostate, {getTasks,setCurrentPage, updateTaskText, addNewTask, removeTask})(TaskListContainer) 