import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { EditNews } from '../../component/AdminBlogs/News/EditNews'

const NewsEdit = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <EditNews />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsEdit;
