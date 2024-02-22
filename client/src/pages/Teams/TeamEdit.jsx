import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { EditTeam } from '../../component/AdminBlogs/Teams/EditTeam'

const TeamEdit = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <EditTeam />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TeamEdit;
