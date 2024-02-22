import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { NewsListPage } from '../../component/AdminBlogs/News/NewsListPage'

const NewsHomePage = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <NewsListPage />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsHomePage;
