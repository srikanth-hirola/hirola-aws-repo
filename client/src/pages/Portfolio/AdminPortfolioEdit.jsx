import React from 'react'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import { EditPortfolio } from '../../component/AdminBlogs/Portfolio/EditPortfolio'

const AdminPortfolioEdit = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <EditPortfolio />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminPortfolioEdit;
