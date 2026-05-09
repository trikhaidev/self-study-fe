import { createContext } from "react";
import type { TaskReducerAction } from "../reducers/taskReducer";

export const TaskDispatchContext = createContext<React.ActionDispatch<[action: TaskReducerAction]>|null>(null);