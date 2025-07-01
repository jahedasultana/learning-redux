import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";

import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        // element:<div>Hello World</div>
        Component: App,
        children: [
            {
               index: true,
                Component: User,

            },
            {
                path: "users",
                Component: User,

            },

            {
                path: "tasks",
                Component: Tasks,
            }
        ]
    },
]);

export default router;