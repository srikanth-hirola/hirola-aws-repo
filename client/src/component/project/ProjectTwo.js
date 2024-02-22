import React, { useEffect, useState } from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectPropTwo from './itemProp/ProjectPropTwo';
import { Link } from 'react-router-dom';
import { useApiCalls } from '../../Hooks/useApiCalls';


const ProjectTwo = () => {

    const [loading, setLoading] = useState(false);
    const [portfolios, setportfolio] = useState([]);
    console.log("portfolios", portfolios)
    const [pagefound, setPageFound] = useState('');
  
    const { fetchBunchData } = useApiCalls();
  
    useEffect(() => {
      let endpoint = 'admin/portfolio'
      fetchBunchData(endpoint, setLoading, setportfolio, setPageFound);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
        <div className="section section-padding-equal bg-color-dark">
            <div className="container">
            <SectionTitle 
                subtitle="Case study"
                title="Selected projects"
                description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue eget risus imperdiet."
                textAlignment="heading-light-left"
                textColor=""
            />
            <div className="row row-45">
                {portfolios.slice(12, 16).map((data) => (
                    <div className="col-md-6" key={data.id}>
                        <ProjectPropTwo projectStyle="project-style-2" portfolio={data}/>
                    </div>
                ))}

            </div>
            <div className="more-project-btn">
                <Link to={process.env.PUBLIC_URL + "/project-grid-two"} className="axil-btn btn-fill-white">Discover More Projects</Link>
            </div>
        </div>
    </div>
    )
}

export default ProjectTwo;