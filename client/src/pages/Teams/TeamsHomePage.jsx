import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { TeamsListPage } from '../../component/AdminBlogs/Teams/TeamsListPage'

const TeamsHomePage = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <TeamsListPage />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TeamsHomePage;
