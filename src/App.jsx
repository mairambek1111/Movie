import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/header";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
