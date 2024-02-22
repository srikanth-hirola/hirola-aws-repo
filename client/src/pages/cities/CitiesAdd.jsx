import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { AddCities } from '../../component/AdminBlogs/cities/AddCities'

const CitiesAdd = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <AddCities />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CitiesAdd;
