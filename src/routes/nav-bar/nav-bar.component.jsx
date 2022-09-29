import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom"

const NavBar = () => {
    return (
        <Fragment>
            <div>
                <div><h1>Nav Bar</h1></div>
                <div>
                    <Link to={'/'}>HOME</Link>
                </div>
                <div>
                    <Link to={'/user'}>USER</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavBar;