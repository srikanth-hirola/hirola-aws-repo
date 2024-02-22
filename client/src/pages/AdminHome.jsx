import React from 'react'
import { SideBar } from '../component/AdminBlogs/SideBar'
import Admin from '../component/AdminBlogs/admin'
import Footer from '../component/AdminBlogs/Constants/footer'

const AdminHome = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <Admin />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminHome;


