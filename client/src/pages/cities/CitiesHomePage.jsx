import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { CitiesListPage } from '../../component/AdminBlogs/cities/CitiesListPage'

const CitiesHomePage = () => {
  return (
    <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <CitiesListPage />
                </div>
            </div>
            <Footer />
        </>
  )
}

export default CitiesHomePage