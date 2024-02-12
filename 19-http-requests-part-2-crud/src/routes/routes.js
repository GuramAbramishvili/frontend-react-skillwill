import MainPage from "../pages/MainPage"
import CreatePage from "../pages/createPage"
import LinkLayout from "../Layout/LinkLayout"
import UpdatePage from "../pages/UpdatePage"
import DonePage from "../pages/donePage"

const routes = [
    {
        element: <LinkLayout />,
        path: "/",
        children: [
            {
                element: <MainPage />,
                index: true,
            },
            {
                element: <CreatePage />,
                path: '/create',
            },
            {
                element: <DonePage />,
                path: '/done',
            },
        ]},
        {
            element: <UpdatePage />,
            path: '/update/:taskId',
        }

]


export default routes