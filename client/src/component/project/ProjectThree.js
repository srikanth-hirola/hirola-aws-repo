import React, { useEffect, useState } from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectPropTwo from './itemProp/ProjectPropTwo';
import { useApiCalls } from '../../Hooks/useApiCalls';



const ProjectThree = () => {

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
        <div className="section section-padding pb--80 pb_lg--40 pb_md--20 pb_sm--0">
        <div className="container">
            <SectionTitle 
            subtitle="Featured Case study"
            title="Photography &amp; drawing"
            description=""
            textAlignment="heading-left"
            textColor=""
            />
            <div className="row row-45">
                {portfolios.slice(16, 18).map((data) => (
                    <div className="col-md-6" key={data.id}>
                        <ProjectPropTwo projectStyle="project-style-2" portfolio={data}/>

                    </div>
                ))}

            </div>
        </div>
    </div>
    )
}

export default ProjectThree;