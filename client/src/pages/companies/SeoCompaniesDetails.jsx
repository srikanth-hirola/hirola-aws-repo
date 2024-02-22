// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import FooterOne from "../../common/footer/FooterOne";
// import HeaderOne from "../../common/header/HeaderOne";
// // import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
// import { slugify } from "../../utils";
// // import ServiceData from "../../data/companies/SeoCompanies.json";
// import Accordion from "react-bootstrap/Accordion";
// import { FaCompress } from "react-icons/fa";


// // our process
// import SectionTitle from "../../elements/section-title/SectionTitle";
// import Tilty from "react-tilty";
// import { Helmet } from 'react-helmet-async';
// import FormOne from "../../component/contact/FormOne";
// import FooterCta from "../../component/cta/FooterCta";
// import Reveal from 'react-reveal/Reveal';
// // const allServiceData = ServiceData;

// const ServiceDetails = () => {
//   const params = useParams();
//   const serviceSlug = params.slug;

//   const getServiceData = allServiceData.filter(
//     (data) => slugify(data.title) === serviceSlug
//   );
//   const detailsService = getServiceData[0];
//   console.log(detailsService);

//   return (
//     <>
     


// <Helmet>
// <title>{detailsService.metaTitle}</title>
// <meta name='description' content={detailsService.metaDescription} data-rh="true" />
// </Helmet>

     
//       <main className="main-wrapper">
//         <HeaderOne />
//         {/* <Reveal effect="fadeInUp" duration={900}> */}
//         <div className="breadcrum-area breadcrumb-banner">
//           <div className="container">
//             <div className="section-heading heading-left">
//               <h3 className="title h3">{detailsService.new}</h3>
//               {/* <h3 className="subtitlee">{detailsService.descriptionSecond}</h3> */}
//               <p>{detailsService.descriptionSecond}</p>
//               <Link
//                 to={process.env.PUBLIC_URL + "/contact"}
//                 className="axil-btn btn-fill-primary btn-large"
//               >
//                 Get Started With Us
//               </Link>
//             </div>
//             <div className={`banner-thumbnail `}>
//               <Tilty perspective={2000} reset={false}>
//                 <img
//                   src={process.env.PUBLIC_URL + detailsService.mainImage}
//                   loading="lazy" alt="Illustration"
//                 />
//               </Tilty>
//             </div>
//           </div>
//           <ul className="shape-group-8 list-unstyled visually-hidden  ">
//             <li className="shape shape-1">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"}
//                 loading="lazy" alt="Bubble"
//               />
//             </li>
//             <li className="shape shape-2">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/bubble-21.png"}
//                 loading="lazy" alt="Bubble"
//               />
//             </li>
//             <li className="shape shape-3">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
//                 loading="lazy" alt="Line"
//               />
//             </li>
//           </ul>
//         </div>

//         {/* about us section */}
//         {/* why work with us */}
//         <div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20">
//           <div className="container">
//             <SectionTitle
//               subtitle="Our Values"
//               title={detailsService.ServiceInformation.title}
//               description={detailsService.ServiceInformation.description}
//               textAlignment="heading-left heading-light-left mb--100 text-white"
//               textColor=""
//             />

//             <div className="row">
//              {
//               detailsService.ServiceInformation.serviceInformationData.map((data)=>(
//                 <div className="col-lg-6" key={data.id}>
//                   <div className="about-quality">
//                     <h5 className="title">{data.title}</h5>
//                     <p>{data.description}</p>
//                   </div>
//                 </div>
//               ))
//              }
//             </div>
//           </div>
//           <ul className="list-unstyled shape-group-10 d-none">
//             <li className="shape shape-1">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
//                 loading="lazy" alt="Circle"
//               />
//             </li>
//             <li className="shape shape-2">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
//                 loading="lazy" alt="Circle"
//               />
//             </li>
//             <li className="shape shape-3">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
//                 loading="lazy" alt="Circle"
//               />
//             </li>
//           </ul>
//         </div>
//         {/* why work with us */}

//         {/* about us */}

//         <div className="section section-padding pb--70">
//           <div className="container">
//             <h4 className="title text-center">{detailsService.aboutUs.title}</h4>
//             {
//               detailsService.aboutUs.description.map((aboutData)=>(
//                 <p dangerouslySetInnerHTML={{__html: aboutData }}></p>
//               ))
//             }
//           </div>
//         </div>

//         {/* about us */}
//    {/* our process */}
//    <div className="section section-padding pb--70">
//           <SectionTitle
//             subtitle="Process"
//             title="Our logo design process"
//             description={detailsService.designProcess.description}
//             textAlignment=""
//             textColor="mb--90"
//           />
//           <div className="container">
//             {detailsService.designProcess.designSteps.map((designSteps) => (
//               <div
//                 key={designSteps.id}
//                 className={`process-work ${
//                   designSteps.id % 2 === 0 ? "content-reverse" : ""
//                 }`}
//               >
//                 <Tilty perspective={2000}>
//                   <div className="thumbnail">
//                     <img src={designSteps.image} loading="lazy" alt="Thumbnail" />
//                   </div>
//                 </Tilty>
//                 <div className="content">
//                   <span className="subtitle">{designSteps.stepOne}</span>
//                   <h3 className="title">{designSteps.stepTwo}</h3>
//                   <p>{designSteps.stepThree}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <ul className="shape-group-17 list-unstyled">
//             <li className="shape shape-1">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"}
//                 loading="lazy" alt="Bubble"
//               />
//             </li>
//             <li className="shape shape-2">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"}
//                 loading="lazy" alt="Bubble"
//               />
//             </li>
//             <li className="shape shape-3">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
//                 loading="lazy" alt="Line"
//               />
//             </li>
//             <li className="shape shape-4">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
//                 loading="lazy" alt="Line"
//               />
//             </li>
//             <li className="shape shape-5">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
//                 loading="lazy" alt="Line"
//               />
//             </li>
//             <li className="shape shape-6">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
//                 loading="lazy" alt="Line"
//               />
//             </li>
//           </ul>
//         </div>

//         {/* {/* our process */}
// {/* informative secrion */}


// <div className="section section-padding pb--70 ">
           
//            <div className="container">
//               <h3 className='text-center' >{detailsService.dataOne.title}</h3>
//               {
//               detailsService.dataOne.description.map((dataList)=>(
//                 <p dangerouslySetInnerHTML={{__html: dataList }}></p>
//               ))
//              }
             
//               <div className='row'>
//                <div className='col-md-6 mb-2 mt-2 service_data'>
//                {
//                    detailsService.dataOne.dataOneList.map((data,i)=>(
//                        <p className='serviceData' key={i} dangerouslySetInnerHTML={{__html: data}}></p>
//                    ))
//                }
//                </div>
//                <div className='col-md-6 service_data'>
//                {
//                    detailsService.dataOne.dataTwoList.map((data,i)=>(
//                        <div key={i} dangerouslySetInnerHTML={{__html: data}}></div>
//                    ))
//                }
//                </div>
//               </div>
//            </div>
           
//        </div>

       
// <div className="section section-padding pb--70 ">
           
//            <div className="container">
//               <h3 className='text-center' >{detailsService.dataTwo.title}</h3>
//               {
//               detailsService.dataTwo.description.map((dataList)=>(
//                 <p dangerouslySetInnerHTML={{__html: dataList }}></p>
//               ))
//              }
             
//               <div className='row'>
//                <div className='col-md-6 mb-2 mt-2 service_data'>
//                {
//                    detailsService.dataTwo.dataTwoList.map((data,i)=>(
//                        <p className='serviceData' key={i} dangerouslySetInnerHTML={{__html: data}}></p>
//                    ))
//                }
//                </div>
//                <div className='col-md-6 service_data'>
//                {
//                    detailsService.dataTwo.dataTwoList.map((data,i)=>(
//                        <div key={i} dangerouslySetInnerHTML={{__html: data}}></div>
//                    ))
//                }
//                </div>
//               </div>
//            </div>
           
//        </div>
// {/* informative secrion */}
//   {/* why work with us */}
//   <div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20">
//           <div className="container">
//             <SectionTitle
//               subtitle="Our Values"
//               title={detailsService.WhyHirolaServices.title}
//               description={detailsService.WhyHirolaServices.description}
//               textAlignment="heading-left heading-light-left mb--100 text-white"
//               textColor=""
//             />

//             <div className="row">
//               {detailsService.WhyHirolaServices.servicesProvided.map((data) => (
//                 <div className="col-lg-6" key={data.id}>
//                   <div className="about-quality">
//                     <h5 className="title">{data.title}</h5>
//                     <p>{data.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <ul className="list-unstyled shape-group-10 d-none">
//             <li className="shape shape-1">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
//                 loading="lazy" alt="Circle"
//               />
//             </li>
//             <li className="shape shape-2">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
//                 loading="lazy" alt="Circle"
//               />
//             </li>
//             <li className="shape shape-3">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
//                 loading="lazy" alt="Circle"
//               />
//             </li>
//           </ul>
//         </div>
  

//         {/* services more info ends here */}

//         <div className="section section-padding pb--70 ">
           
//            <div className="container">
//               <h3 className='text-center' >{detailsService.dataThree.title}</h3>
//               {
//               detailsService.dataThree.description.map((dataList)=>(
//                 <p dangerouslySetInnerHTML={{__html: dataList }}></p>
//               ))
//              }
             
//               <div className='row'>
//                <div className='col-md-6 mb-2 mt-2 service_data'>
//                {
//                    detailsService.dataThree.dataOneList.map((data,i)=>(
//                        <p className='serviceData' key={i} dangerouslySetInnerHTML={{__html: data}}></p>
//                    ))
//                }
//                </div>
//                <div className='col-md-6 service_data'>
//                {
//                    detailsService.dataThree.dataTwoList.map((data,i)=>(
//                        <div key={i} dangerouslySetInnerHTML={{__html: data}}></div>
//                    ))
//                }
//                </div>
//               </div>
//            </div>
           
//        </div>



//        <div className="section section-padding pb--70 ">
           
//            <div className="container">
//               <h3 className='text-center' >{detailsService.dataFour.title}</h3>
//               {/* {
//               detailsService.dataFour.description.map((dataList)=>(
//                 <p dangerouslySetInnerHTML={{__html: dataList }}></p>
//               ))
//              } */}
             
//               <div className='row'>
//                <div className='col-md-6 mb-2 mt-2 service_data'>
//                {
//                    detailsService.dataFour.dataOneList.map((data,i)=>(
//                        <p className='serviceData' key={i} dangerouslySetInnerHTML={{__html: data}}></p>
//                    ))
//                }
//                </div>
//                <div className='col-md-6 service_data'>
//                {
//                    detailsService.dataFour.dataTwoList.map((data,i)=>(
//                        <div key={i} dangerouslySetInnerHTML={{__html: data}}></div>
//                    ))
//                }
//                </div>
//               </div>
//            </div>
           
//        </div>
//         {/* faq ection goes here */}

//         <div className="section section-padding-equal faq-area">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12 col-xl-12">
//                 <SectionTitle
//                   title="Frequently asked questions"
//                   textAlignment="heading-left"
//                   textColor=""
//                 />
//               </div>
//               <div className="col-lg-12 col-xl-12">
//                 <div className="faq-accordion">
//                   <Accordion defaultActiveKey="1">
//                     {detailsService.faq.faqData.map((faqData) => (
//                       <Accordion.Item eventKey={faqData.id} key={faqData.id}>
//                         <Accordion.Header>
//                           <span>{`${faqData.id}.`}</span>
//                           {faqData.title}
//                         </Accordion.Header>
//                         <Accordion.Body>
//                           <p>{faqData.description}</p>
//                         </Accordion.Body>
//                       </Accordion.Item>
//                     ))}
//                   </Accordion>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ul className="shape-group-6 list-unstyled">
//             <li className="shape shape-1">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
//                 loading="lazy" alt="Bubble"
//               />
//             </li>
//             <li className="shape shape-2">
//               <img
//                 src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
//                 loading="lazy" alt="line"
//               />
//             </li>
//             {/* <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/poses-lady.png"} loading="lazy" alt="Poses" /></li> */}
//           </ul>
//         </div>
//         {/* faq section goes here */}
//         <FooterCta />
//         <FooterOne parentClass="" />
//         {/* </Reveal> */}
//       </main>
//     </>
//   );
// };

// export default ServiceDetails;
