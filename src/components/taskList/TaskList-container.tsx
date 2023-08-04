import TaskList from "./TaskList"
import React from "react"
import { connect } from "react-redux"
import { getTasks } from "../../react-redux/tasks-reducer"
import { setCurrentPage, updateTaskText, addNewTask, removeTask } from "../../react-redux/tasks-reducer"
const { useEffect, useState } = React

const TaskListContainer = (props: any) => { 
    useEffect (() => {
       
        props.getTasks(props.currentPage,props.pageSize)
    },[])
    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        props.getTasks(pageNumber,props.pageSize)

    }
    
    return <TaskList tasks={props.tasks} pageSize={props.pageSize} 
    currentPage={props.currentPage} total={props.total}
    onPageChanged={onPageChanged} newTaskText={props.newTaskText}
    updateTaskText={props.updateTaskText} addNewTask={props.addNewTask} 
    removeTask={props.removeTask} />
}

const mapStateToProps = (store: any) => {
    
return {
    currentPage: store.tasksPage.currentPage,
    pageSize: store.tasksPage.pageSize,
    tasks: store.tasksPage.tasks,
    total: store.tasksPage.total,
    newTaskText: store.tasksPage.newTaskText
}
}

export default connect(mapStateToProps, {getTasks,setCurrentPage, updateTaskText, addNewTask, removeTask})(TaskListContainer) 