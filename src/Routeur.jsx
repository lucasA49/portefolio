import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./Pages/Contact";
import Accueil from "./Pages/Accueil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
             {
                index: true,
                element: <Accueil/>,
             },
{
    path: "Contact",
    element: <Contact/>,
},

        ],
        errorElement: <h1>not found</h1>,
    },
]);

export default router;