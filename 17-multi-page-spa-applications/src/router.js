import LinkLayout from "./layouts/LinkLayout"
import HomePage from "./pages/homePage"
import AboutPage from "./pages/about"
import ParamPage from "./pages/ParamPage"
import ErrorPage from "./pages/ErrorPage"

const router = [
    {
        element: <LinkLayout />,
        path: "/",
        children: [
            {
                element: <HomePage />,
                index: true,
            },
            {
                element: <AboutPage />,
                path: '/about',
            }
        ]},
        {
            element: <ParamPage />,
            path: '/params/:factId'
        },
        {
            element: <ErrorPage />,
            path: '*'
        }
]

export default router