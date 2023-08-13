import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../../react-redux/redux-store"

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector