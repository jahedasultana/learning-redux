import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState{
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState : InitialState = {
    tasks: [
        {
        id: "gugujgugyu",
        title: "Initialize frontend",
        description: "Create homepage, and routing",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "High",
    },
    {
        id: "gugujgugyu",
        title: "Create github repo",
        description: "Create homepage, and routing",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "High",
    },
    ],
    filter: "all",
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
});


export const selectTasks = (state: RootState) =>{
    return state.todo.tasks;
};
export const selectFilter = (state: RootState) =>{
    return state.todo.filter;
};

export default taskSlice.reducer;