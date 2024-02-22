import React from 'react'
import { SideBar } from '../../component/AdminBlogs/SideBar'
import Footer from '../../component/AdminBlogs/Constants/footer'
import { FormData } from '../../component/AdminBlogs/Form/FormData'

const FormPage = () => {
    return (
        <>
            <div className='admin-home-parent'>
                <SideBar />
                <div className='admin-main-parent'>
                    <FormData />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FormPage;
