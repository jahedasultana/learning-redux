import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    task: ITask[];
}

const initialState : InitialState = {
    task: [
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
    ]
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
});

export default taskSlice.reducer;