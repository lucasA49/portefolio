import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./Pages/Contact";
import Accueil from "./Pages/Accueil";
import TextHome from "./TextHome";

const router = createBrowserRouter([
   
    {
      path: "/accueil",
      errorElement: <h1>Page non trouvée</h1>,
      element:(

   <>
        <Accueil />,
        <App/>
        <TextHome/>
        </>
    )
    },
    {
      path: "contact",
      element: (
      <>
      <App/>
      <Contact />,
      
      </> 
      )
    },
  ]);

export default router;