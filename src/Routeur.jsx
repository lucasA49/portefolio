import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>,
            },
        


        ],
        errorElement: <h1>not found</h1>,
    },
]);

export default router;