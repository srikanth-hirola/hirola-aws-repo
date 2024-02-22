import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { EditCity } from '../../component/AdminBlogs/cities/EditCity'

const CityEdit = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <EditCity />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CityEdit;
