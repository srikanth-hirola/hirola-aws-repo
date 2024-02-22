import React from 'react'
import Reveal from 'react-reveal'
import { Link } from 'react-router-dom'
import PopUpForm from '../contact/PopUpForm'
const HomeCaseStudy = () => {
  return (
    <>
        <div class="case-study-wrap">
	<div class="case-study-bg"></div>
	<div class="container">
		<div class="case-study-div">
			<h2>Case study</h2>
			<p class="content width60"> We design, we write code, and we love the business side of it all. We are hired to work on new problems together. </p>
            <div class="portfolio-div">
			<Reveal effect="fadeInUp" duration={2500}>
				<img src="/images/others/hsbc.webp" loading="lazy" alt="Hirola InfoTech Solutions- Digital Marketing Agency"/>
            </Reveal>
			</div>
			<div class="portfolio-block fright aos-init" data-aos="fade-up-left" data-aos-delay="10" data-aos-duration="1000">
				<div class="tech-div"><span class="tech-btn">PPC</span><span class="tech-btn">Digital Marketing</span></div>
				<p class="tech-title">HSBC</p>
				<p class="tech-content"> With their expertise in social media marketing, Hirola Infotech Solutions has developed and implemented tailored strategies to promote HSBC Bank's home loan products to a targeted audience across various social media platforms </p>
				{/* <Link to="/" target="_blank" class="btn common-btn" id="discover1" onclick="btnFlip(this.id)" rel="noopener"> */}
					
					<p class="p2"><PopUpForm title={"Get Started"}/></p>
				{/* </Link> */}
				{/* <div class="left-dots-bg"></div> */}
			</div>
			<div class="portfolio-div fright aos-init" data-aos="fade-up-left" data-aos-delay="10" data-aos-duration="1000">
				<img src="/images/others/concept.webp" loading="lazy" alt="Hirola InfoTech Solutions- Digital MArketing Agency"/>
			</div>
			<div class="portfolio-block fleft aos-init" data-aos="fade-up-right" data-aos-delay="10" data-aos-duration="1000">
				<div class="tech-div"><span class="tech-btn">Website</span><span class="tech-btn">Digital Marketing</span></div>
				<p class="tech-title">Concept City</p>
				<p class="tech-content"> In the realm of website development, Hirola InfoTech Solutions excels in harnessing the latest technologies and trends. They ensure that Concept City's website is not only visually captivating but also highly responsive and user-friendly, catering to the diverse needs of their audience. </p>
				{/* <Link to="/" target="_blank" class="btn common-btn" id="discover2" onclick="btnFlip(this.id)" rel="noopener"> */}
					
					<p class="p2"><PopUpForm title={"Get Started"}/></p>
				{/* </Link> */}
				{/* <div class="right-dots-bg"></div> */}
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default HomeCaseStudy
