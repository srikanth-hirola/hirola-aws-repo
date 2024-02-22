import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <div className='admin-side-bar'>
            <div className='side-bar-child'>
                <Link to={"/admin"}>Blogs</Link>
                <Link to={"/admin/portfolio"}>Portfolio</Link>
                <Link to={"/admin/team"}>Team</Link>
                <Link to={"/admin/news"}>News</Link>
                <Link to={"/admin/form"}>FormData</Link>
            </div>
        </div>
    )
}
