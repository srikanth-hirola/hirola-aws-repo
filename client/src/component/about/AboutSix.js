import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import { useApiCalls } from '../../Hooks/useApiCalls';


const AboutSix = () => {

    const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState([]);
  console.log("teammm", team)
  const [pagefound, setPageFound] = useState('');

    
    // const delhiTeam = team.filter(data => slugify(data.category ? data.category : "") === "delhi");
    const dubaiTeam = team.filter(data => slugify(data.category ? data.category : "") === "dubai");
    // const hyderabadTeam = team.filter(data => slugify(data.category ? data.category : "") === "hyderabad");
    // const mumbaiTeam = team.filter(data => slugify(data.category ? data.category : "") === "mumbai");
    const bangaloreTeam = team.filter(data => slugify(data.category ? data.category : "") === "bangalore");

    const { fetchBunchData } = useApiCalls();

    useEffect(() => {
        let endpoint = 'admin/team'
        fetchBunchData(endpoint, setLoading, setTeam, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
 <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <div className="col-lg-12">
               
                </div>
                <div className="col-lg-12 text-center">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle text-center w-100">Our Team</span>
                        <h3 className='text-center' >Alone we can do so little; together we can do so much.</h3> 
                        <div className="section-heading heading-light">
            <h4 className="title mb--50">Our Bangalore Team</h4>
            </div>
            <div className="row">
                {bangaloreTeam.reverse(3,...bangaloreTeam).map((data) => (
                    <div className="col-xl-3 col-sm-6 team-list " key={data.id}>
                        <div className="team-grid">
                            <div className="thumbnail">
                                <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                    <img src={process.env.PUBLIC_URL + data.thumb.url} loading="lazy" alt={data.title} />
                                </Link>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                        {data.title}
                                    </Link>
                                </h4>
                                <span className="designation" dangerouslySetInnerHTML={{__html: data.designation}}></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
                        <div className="section-heading heading-light d-none">
            <h4 className="title mb--50">Our Dubai Team</h4>
            </div>         
               <div className="row d-none">
                {dubaiTeam.map((data) => (
                    <div className="col-xl-3 col-sm-6 team-list " key={data.id}>
                        <div className="team-grid">
                            <div className="thumbnail">
                                <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                    <img src={process.env.PUBLIC_URL + data.thumb.url} loading="lazy" alt={data.title} />
                                </Link>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                        {data.title}
                                    </Link>
                                </h4>
                                <span className="designation" dangerouslySetInnerHTML={{__html: data.designation}}></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
                        {/* <Link to="/team" className="axil-btn btn-large btn-fill-primary">Our Team</Link> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutSix