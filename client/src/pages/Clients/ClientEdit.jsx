import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { EditClient } from '../../component/AdminBlogs/Clients/EditClient'

const ClientEdit = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <EditClient />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ClientEdit;
