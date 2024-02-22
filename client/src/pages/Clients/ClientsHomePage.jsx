import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { ClientsListPage } from '../../component/AdminBlogs/Clients/ClientsListPage'

const ClientsHomePage = () => {
  return (
    <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <ClientsListPage />
                </div>
            </div>
            <Footer />
        </>
  )
}

export default ClientsHomePage