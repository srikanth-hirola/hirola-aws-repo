import React from 'react'
// import { SideBar } from '../component/AdminBlogs/SideBar'
import Footer from '../component/AdminBlogs/Constants/footer'
import Compose from '../component/AdminBlogs/compose'
import { SideBar } from '../component/AdminBlogs/SideBar'

const AddBlog = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <Compose />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddBlog;
