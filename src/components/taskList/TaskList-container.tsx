import TaskList from "./TaskList"
import React from "react"
import { connect } from "react-redux"
import { getTasks } from "../../react-redux/tasks-reducer"
import { setCurrentPage } from "../../react-redux/tasks-reducer"
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
    onPageChanged={onPageChanged} setCurrentPage={props.setCurrentPage} />
}

const mapStateToProps = (store: any) => {
    
return {
    currentPage: store.tasksPage.currentPage,
    pageSize: store.tasksPage.pageSize,
    tasks: store.tasksPage.tasks,
    total: store.tasksPage.total
}
}

export default connect(mapStateToProps, {getTasks,setCurrentPage})(TaskListContainer) 