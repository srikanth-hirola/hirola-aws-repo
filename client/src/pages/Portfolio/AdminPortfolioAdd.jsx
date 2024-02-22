import React from 'react'
import { AddPortfolio } from '../../component/AdminBlogs/Portfolio/AddPortfolio'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'

const AdminPortfolioAdd = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <AddPortfolio />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminPortfolioAdd;
