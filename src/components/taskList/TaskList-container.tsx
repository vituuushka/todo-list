import TaskList from "./TaskList"
import React from "react"
import { connect } from "react-redux"
import { getTasks } from "../../react-redux/tusks-reducer"
const { useEffect, useState } = React

const TaskListContainer = (props: any) => { 
    useEffect (() => {
        
        props.getTasks(props.currentPage,props.pageSize)
        
    },[])
    
    // const lastTaskIndex = props.currentPage * props.pageSize
    // const firstTaskIndex = (lastTaskIndex-props.pageSize)+1
    return <TaskList tasks={props.tasks}/>
}

const mapStateToProps = (store: any) => {
    
return {
    currentPage: store.tasksPage.currentPage,
    pageSize: store.tasksPage.pageSize,
    tasks: store.tasksPage.tasks

}
}

export default connect(mapStateToProps, {getTasks})(TaskListContainer) 