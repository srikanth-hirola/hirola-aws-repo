import React from 'react'
import { SideBar } from '../component/AdminBlogs/SideBar'
import Footer from '../component/AdminBlogs/Constants/footer'
import BlogEdit from '../component/AdminBlogs/blogedit'

const EditBlog = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <BlogEdit />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EditBlog;
