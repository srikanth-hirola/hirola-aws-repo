import React from 'react'
import HeaderOne from '../../common/header/HeaderOne'
import FooterOne from '../../common/footer/FooterOne'
import Banner from '../../component/pr/Banner'
import PrSectionOne from '../../component/pr/PrSectionOne'
import PressReleaseTwo from '../../component/pr/PressReleaseTwo'
import PressReleaseThree from '../../component/pr/PressReleaseThree'
import Magazines from '../../component/pr/Magazines'
import GrowWithUs from '../../component/pr/GrowWithUs'
import PrProcess from '../../component/pr/PrProcess'
import HeaderTwo from '../../common/header/HeaderTwo'
import { Helmet } from 'react-helmet-async'

const PressRelease = () => {
  return (
    <div>
     <Helmet>
<title>Best PR Agency in Bangalore | Hirola InfoTech Solutions Pvt Ltd</title>
<meta name='description' content='Looking for the best PR agency in Bangalore? Our team of experts provides trusted and professional PR services to help you achieve your business goals.'data-rh="true" />
</Helmet>
      <HeaderTwo/>
<Banner/>
<PrSectionOne/>
<Magazines/>
<GrowWithUs/>
<PressReleaseTwo/>
<PressReleaseThree/>
<PrProcess/>
      <FooterOne/>
    </div>
  )
}

export default PressRelease
