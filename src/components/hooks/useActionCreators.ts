import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionCreators from './../../react-redux/tasks-reducer'

export const UseActions = () => {
const dispatch = useDispatch()
return bindActionCreators(ActionCreators, dispatch)
}