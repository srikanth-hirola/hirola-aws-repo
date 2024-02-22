import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { AddNews } from '../../component/AdminBlogs/News/AddNews'

const NewsAdd = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <AddNews />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsAdd;
