import { Link, Outlet } from "react-router-dom"

const LinkLayout = () => {
    return(
        <div>
            <div>
                <Link to={'/'}>MainPage</Link>
                <Link to={'/create'}>CreatePage</Link>
            </div>
            <Outlet />
        </div>

    )
} 

export default LinkLayout 