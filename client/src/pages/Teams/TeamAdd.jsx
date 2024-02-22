import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { AddTeam } from '../../component/AdminBlogs/Teams/AddTeam'

const TeamAdd = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <AddTeam />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TeamAdd;
