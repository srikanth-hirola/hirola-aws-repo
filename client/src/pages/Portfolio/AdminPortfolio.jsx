import React from 'react'
import { PortfolioList } from '../../component/AdminBlogs/Portfolio/PortfolioList'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'

const AdminPortfolio = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <PortfolioList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminPortfolio;