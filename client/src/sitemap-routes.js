import React from 'react';
import { Routes } from 'react-router';
 
export default (
    <Routes>
          <Route
            path={process.env.PUBLIC_URL + '/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/page-one'}
            
          />

          <Route
            path={process.env.PUBLIC_URL + '/digital-agency'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/creative-agency'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/personal-portfolio'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/home-startup'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/corporate-agency'}
            
          />

          {/* Blogs */}
          <Route
            path={process.env.PUBLIC_URL + '/blog/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/category/:slug'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/archive/:slug'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/blog/:slug/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/clients/'}
            
          />

          {/* Service */}
          <Route
            path={process.env.PUBLIC_URL + '/services/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/services-two/'}
            
          />
           <Route
            path={process.env.PUBLIC_URL + '/products/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/services/:slug/'}
            
          />

             {/* <Route
             <Route
            path={process.env.PUBLIC_URL + '/our-products/:slug/'}
            
          /> */}
          <Route
            path={process.env.PUBLIC_URL + 'products/hr-and-payroll-management-software'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + 'products/jewellery-software'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + 'products/inventory-management-system'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + 'products/school-management-system'}
            
          />
              <Route
            path={process.env.PUBLIC_URL + '/industries/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/industries/:slug/'}
            
          />
        

          {/* Project  */}
          <Route
            path={process.env.PUBLIC_URL + '/project-grid-one/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/project-grid-two/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/portfolio/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/project-width-one/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/project-width-two/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/portfolio/:slug/'}
            
          />

          {/* Pages  */}
          <Route
            path={process.env.PUBLIC_URL + '/about-us/'}
            
          />
          {/* <Route
            path={process.env.PUBLIC_URL + '/tab/'}
            
          /> */}
          <Route
            path={process.env.PUBLIC_URL + '/cities-we-are/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/cities-we-are/:slug/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/our-office/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/our-clients/'}
            
          />
          <Route path={process.env.PUBLIC_URL + '/team/'}  />
          <Route
            path={process.env.PUBLIC_URL + '/team-details/:slug/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/case-studies/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/case-details/:slug/'}
            
          />
           <Route
            path={process.env.PUBLIC_URL + '/seo-companies/'}
            
          />
            <Route
            path={process.env.PUBLIC_URL + '/seo-companies/:slug/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/testimonials/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/pricing-table/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/typography/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/contact-us/'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/404'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/coming-soon'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/services/coming-soon'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/privacy-policy'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/terms-use'}
            
          />
          <Route
            path={process.env.PUBLIC_URL + '/terms-use'}
            
          />
          <Route path={process.env.PUBLIC_URL + '/*'}  />

          {/* Admin */}
          <Route
            path={process.env.PUBLIC_URL + '/admin-panel/'}
            
          />
        </Routes>
);