import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/app.scss';

import { ToastContainer } from 'react-toastify';
import DropdownExample from './elements/Select';
import Sitemap from './elements/section-title/Sitemap';
// import LatestServices from './pages/services-latest/LatestServices';
// Home Pages Import
const DigitalAgency = lazy(() => import('./pages/DigitalAgency'));
const CreativeAgency = lazy(() => import('./pages/CreativeAgency'));
const PersonalPortfolio = lazy(() => import('./pages/PersonalPortfolio'));
const HomeStartup = lazy(() => import('./pages/HomeStartup'));
const CorporateAgency = lazy(() => import('./pages/CorporateAgency'));

// Blog Import
const BlogGridView = lazy(() => import('./pages/BlogGrid'));
const BlogCategory = lazy(() => import('./pages/Category'));
const BlogArchive = lazy(() => import('./pages/Archive'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));

// Service
const ServiceOne = lazy(() => import('./pages/ServiceOne'));
const LatestServices = lazy(() => import('./pages/services-latest/LatestServices'));
const ServiceTwo = lazy(() => import('./pages/ServiceTwo'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));

// Project
const ProjectGridOne = lazy(() => import('./pages/ProjectGridOne'));
const ProjectGridTwo = lazy(() => import('./pages/ProjectGridTwo'));
const ProjectGridThree = lazy(() => import('./pages/ProjectGridThree'));
const ProjectGridFive = lazy(() => import('./pages/ProjectGridFive'));
const ProjectGridFour = lazy(() => import('./pages/ProjectGridFour'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

// Pages
const AboutUs = lazy(() => import('./pages/AboutUs'));
const OurOffice = lazy(() => import('./pages/OurOffice'));
const OurClients = lazy(() => import('./pages/OurClients'));
const Team = lazy(() => import('./pages/Team'));
const TeamDetails = lazy(() => import('./pages/TeamDetails'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const CaseDetails = lazy(() => import('./pages/CaseStudyDetails'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const PricingTable = lazy(() => import('./pages/PricingTable'));
const Typography = lazy(() => import('./pages/Typography'));
const Contact = lazy(() => import('./pages/Contact'));
const ErrorPage = lazy(() => import('./pages/404'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));

// Css Import

// import PageOne from './pages/servicePages/PageOne';
const CitiesWeAre = lazy(() => import('./pages/CitiesWeAre'));
const CitiesWeAreDetails = lazy(() => import('./pages/CitiesWeAreDetails'));
const AboutTab = lazy(() => import('./component/tabs/AboutTab'));

//Admin
// import './component/admin/admin';
// import AdminHome from './component/admin/admin';
const OurProducts = lazy(() => import('./pages/OurProducts'));
const Industries  = lazy(() => import( './pages/Industries'));
const IndustriesDetails  = lazy(() => import( './pages/IndustriesDetails'));
const HrAndPayroll  = lazy(() => import( './pages/productPages/HrAndPayroll'));
const JewellerySoftware  = lazy(() => import( './pages/productPages/JewellerySoftware'));
const InventorySoftware  = lazy(() => import( './pages/productPages/InventorySoftware'));
const SchoolSoftware  = lazy(() => import( './pages/productPages/SchoolSoftware'));
const SeoCompanies  = lazy(() => import( './pages/companies/SeoCompanies'));
const SeoCompaniesDetails  = lazy(() => import( './pages/companies/SeoCompaniesDetails'));
const Delhi  = lazy(() => import( './pages/cities/Delhi'));
const Bangalore  = lazy(() => import( './pages/cities/Bangalore'));
const Pune  = lazy(() => import( './pages/cities/Pune'));
const Kolkata  = lazy(() => import( './pages/cities/Kolkata'));
const Chennai  = lazy(() => import( './pages/cities/Chennai'));
const Mumbai  = lazy(() => import( './pages/cities/Mumbai'));
const Hyderabad  = lazy(() => import( './pages/cities/Hyderabad'));
const SeoCompanyInBangalore  = lazy(() => import( './pages/companies/SeoCompanyInDelhi'));
const SeoCompanyInDelhi  = lazy(() => import( './pages/companies/SeoCompanyInDelhi'));
const SeoCompanyInChennai  = lazy(() => import( './pages/companies/SeoCompanyInChennai'));
const SeoCompanyInHyderabad  = lazy(() => import( './pages/companies/SeoCompanyInHyderabad'));
const SeoCompanyInKolkata  = lazy(() => import( './pages/companies/SeoCompanyInKolkata'));
const SeoCompanyInMumbai  = lazy(() => import( './pages/companies/SeoCompanyInMumbai'));
const SeoCompanyInPune  = lazy(() => import( './pages/companies/SeoCompanyInPune'));
const News  = lazy(() => import( './pages/News'));
const Clients  = lazy(() => import( './pages/Clients'));
const Whatsapp  = lazy(() => import( './common/Whatsapp'));
const SalesIQ  = lazy(() => import( './common/ZohoSales'));

const BasicMasonry  = lazy(() => import( './elements/ClientScroll'));
const Banner  = lazy(() => import( './elements/BannerSlider'));
const Aviaton  = lazy(() => import( './pages/aviation/Aviaton'));
const PressRelease  = lazy(() => import( './pages/pressRelease/PressRelease'));

const EcommerecLandingPage  = lazy(() => import( './pages/langing-pages/e-commerce/EcommerecLandingPage'));
const TeamOverseas  = lazy(() => import( './component/team/TeamOverseas'));
const OverseasTeam  = lazy(() => import( './pages/OverseasTeam'));
const PageNotFound  = lazy(() => import( './pages/PageNotFound'));
const Error  = lazy(() => import( './component/AdminBlogs/Constants/error'));
const AdminHome = lazy(() => import( './pages/AdminHome'));

// blogsroutes starts here

const NewsAdd  = lazy(() => import( './pages/News-pages/NewsAdd'))
const CitiesAdd  = lazy(() => import( './pages/cities/CitiesAdd'))
const ClientsAdd  = lazy(() => import( './pages/Clients/ClientsAdd'))
const TeamAdd  = lazy(() => import( './pages/Teams/TeamAdd'))
const TeamEdit = lazy(() => import( './pages/Teams/TeamEdit'))
const TeamsHomePage = lazy(() => import( './pages/Teams/TeamsHomePage'))
const NewsEdit = lazy(() => import( './pages/News-pages/NewsEdit'))
const CityEdit = lazy(() => import( './pages/cities/CityEdit'))
const ClientEdit = lazy(() => import( './pages/Clients/ClientEdit'))
const NewsHomePage = lazy(() => import( './pages/News-pages/NewsHomePage'))
const CitiesHomePage = lazy(() => import( './pages/cities/CitiesHomePage'))
const ClientsHomePage = lazy(() => import( './pages/Clients/ClientsHomePage'))
const FormPage = lazy(() => import( './pages/Form/FormPage'))
const AddBlog = lazy(() => import( './pages/AddBlog'))
const EditBlog = lazy(() => import( './pages/EditBlog'))
const AdminPortfolioAdd = lazy(() => import( './pages/Portfolio/AdminPortfolioAdd'))
const AdminPortfolio = lazy(() => import( './pages/Portfolio/AdminPortfolio'))
const AdminPortfolioEdit = lazy(() => import( './pages/Portfolio/AdminPortfolioEdit'))
const ProtectedAdminRoute  = lazy(() => import( './Routes/ProtectedAdminRoute'));
const Login = lazy(() => import('./component/AdminBlogs/Login'));
// const Loading  = lazy(() => import( './pages/loading'));



// Admin Panel Components
const Blog = React.lazy(() => import('./component/AdminBlogs/blog'));
// blogsroutes ends here




const LazyBlogContent = lazy(() => import('./pages/BlogGrid'));

const App = () => {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>

          <Suspense fallback={<div>Loading...</div>}>
      <Router  >

        <ScrollToTop>

          <ToastContainer />
          <Routes>

            {/* blogs start here */}


            <Route path="*" element={<Error />} />
            <Route path="/select" element={<DropdownExample />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path='/admin/login' exact element={<Login />} />
            <Route
              path="/admin"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <AdminHome />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/portfolio"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <AdminPortfolio />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/team"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <TeamsHomePage />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/news"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <NewsHomePage />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/cities"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <CitiesHomePage />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/clients"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <ClientsHomePage />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/form"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <FormPage />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/:publish"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <Blog />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/portfolio/edit/:id"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <AdminPortfolioEdit />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/team/edit/:id"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <TeamEdit />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/news/edit/:id"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <NewsEdit />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/cities/edit/:id"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <CityEdit />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/clients/edit/:id"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <ClientEdit />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/blog/edit/:id"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <EditBlog />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/compose"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <AddBlog />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/portfolio/add"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <AdminPortfolioAdd />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/team/add"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <TeamAdd />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/news/add"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <NewsAdd />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/cities/add"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <CitiesAdd />
                  </ProtectedAdminRoute>
                
              }
            />
            <Route
              path="/admin/clients/add"
              exact
              element={
                
                  <ProtectedAdminRoute>
                    <ClientsAdd />
                  </ProtectedAdminRoute>
                
              }
            />


            {/* blogs ends here */}
            <Route
              path={process.env.PUBLIC_URL + '/'}
              element={<DigitalAgency />}
            />
            {/* <Route
            path={process.env.PUBLIC_URL + '/page-one'}
            element={<PageOne />}
          /> */}

            <Route
              path={process.env.PUBLIC_URL + '/digital-agency'}
              element={<DigitalAgency />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/creative-agency'}
              element={<CreativeAgency />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/personal-portfolio'}
              element={<PersonalPortfolio />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/home-startup'}
              element={<HomeStartup />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/corporate-agency'}
              element={<CorporateAgency />}
            />

            {/* Blogs */}
            <Route
              path={process.env.PUBLIC_URL + '/blog/'}
              element={
                
                  <LazyBlogContent />
              }
            />

            <Route
              path={process.env.PUBLIC_URL + '/news/'}
              element={<News />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/clients/'}
              element={<Clients />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/category/:slug'}
              element={<BlogCategory />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/archive/:slug'}
              element={<BlogArchive />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/blog/:slug/'}
              element={<BlogDetails />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/clients/'}
              element={<Clients />}
            />

            {/* Service */}
            <Route
              path={process.env.PUBLIC_URL + '/services/'}
              element={<ServiceOne />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/services/:slug'}
              element={<LatestServices />}
              
            />
            <Route
              path={process.env.PUBLIC_URL + '/services-two/'}
              element={<ServiceTwo />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/products/'}
              element={<OurProducts />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/:slug/'}
              element={<ServiceDetails />}
            />

           
            <Route
              path={process.env.PUBLIC_URL + 'products/hr-and-payroll-management-software'}
              element={<HrAndPayroll />}
            />
            <Route
              path={process.env.PUBLIC_URL + 'products/jewellery-software'}
              element={<JewellerySoftware />}
            />
            <Route
              path={process.env.PUBLIC_URL + 'products/inventory-management-system'}
              element={<InventorySoftware />}
            />
            <Route
              path={process.env.PUBLIC_URL + 'products/school-management-system'}
              element={<SchoolSoftware />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/industries/'}
              element={<Industries />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/industries/:slug/'}
              element={<IndustriesDetails />}
            />


            {/* Project  */}
            <Route
              path={process.env.PUBLIC_URL + '/project-grid-one/'}
              element={<ProjectGridOne />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/project-grid-two/'}
              element={<ProjectGridTwo />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/portfolio/'}
              element={<ProjectGridThree />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/project-width-one/'}
              element={<ProjectGridFour />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/project-width-two/'}
              element={<ProjectGridFive />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/portfolio/:slug/'}
              element={<ProjectDetails />}
            />

            {/* Pages  */}
            <Route
              path={process.env.PUBLIC_URL + '/about-us/'}
              element={<AboutUs />}
            />
         
            <Route
              path={process.env.PUBLIC_URL + '/cities-we-are/'}
              element={<CitiesWeAre />}
            />
        
            <Route
              path={process.env.PUBLIC_URL + '/our-office/'}
              element={<OurOffice />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/our-clients/'}
              element={<OurClients />}
            />
            <Route path={process.env.PUBLIC_URL + '/team/'} element={<Team />} />
            <Route path={process.env.PUBLIC_URL + '/overseas-team/'} element={<OverseasTeam />} />
            <Route
              path={process.env.PUBLIC_URL + '/team-details/:slug/'}
              element={<TeamDetails />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/case-studies/'}
              element={<CaseStudy />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/case-details/:slug/'}
              element={<CaseDetails />}
            />
           
            <Route
              path={process.env.PUBLIC_URL + '/testimonials/'}
              element={<Testimonials />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/pricing-table/'}
              element={<PricingTable />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/typography/'}
              element={<Typography />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/contact-us/'}
              element={<Contact />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/404'}
              element={<ErrorPage />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/coming-soon'}
              element={<ComingSoon />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/services/coming-soon'}
              element={<ComingSoon />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/privacy-policy'}
              element={<PrivacyPolicy />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/terms-and-conditions'}
              element={<TermsOfUse />}
            />
          
            <Route path={process.env.PUBLIC_URL + '/*'} element={<ErrorPage />} />

            {/* Admin */}
            <Route
              path={process.env.PUBLIC_URL + '/admin-panel/'}
              element={<AdminHome />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-delhi/'}
              element={<Delhi />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-bangalore/'}
              element={<Bangalore />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-pune/'}
              element={<Pune />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-kolkata/'}
              element={<Kolkata />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-chennai/'}
              element={<Chennai />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-mumbai/'}
              element={<Mumbai />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/digital-marketing-agency-in-hyderabad/'}
              element={<Hyderabad />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-chennai'}
              element={<SeoCompanyInChennai />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-hyderabad/'}
              element={<SeoCompanyInHyderabad />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-delhi/'}
              element={<SeoCompanyInDelhi />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-kolkata/'}
              element={<SeoCompanyInKolkata />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-mumbai/'}
              element={<SeoCompanyInMumbai />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/seo-company-in-pune/'}
              element={<SeoCompanyInPune />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/patners/'}
              element={<BasicMasonry />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/avaiation/'}
              element={<Aviaton />}
            />

            <Route
              path={process.env.PUBLIC_URL + '/pr-services-in-bangalore/'}
              element={<PressRelease />}
            />


            <Route
              path='*'
              element={<Error />}
            />
          </Routes>
        </ScrollToTop>
        <Whatsapp />
      </Router>
          </Suspense>
    </HelmetProvider>
  );
};

export default App;
