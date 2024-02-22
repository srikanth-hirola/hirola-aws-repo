import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { AddClients } from '../../component/AdminBlogs/Clients/AddClients'

const ClientsAdd = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <AddClients />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ClientsAdd;
