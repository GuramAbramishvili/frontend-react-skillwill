import { RouteObject } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LinkLayout from "../Layout/LinkLayout";
import CreatePage from "../pages/CreatePage";


const routes: RouteObject[] = [
    {
        element: <LinkLayout/>,
        path: '/',
        children:  [
            {
                element: <MainPage/>,
                index: true
            },
            {
                element: <CreatePage/>,
                path: '/create'
            }
        ]
    }
]


export default routes