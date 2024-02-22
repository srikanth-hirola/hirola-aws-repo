import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';



const CitiesProp = ({colSize, serviceStyle, citiesData}) => {

    return (
		<>
			{citiesData.map((data, index) => (
				<div className={colSize} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} loading="lazy" alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
                            asncakjn
								<Link to={process.env.PUBLIC_URL + `/cities-we-are/${slugify(data.title)}`}>{data.title}</Link>
							</h5>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + `/cities-we-are/${slugify(data.title)}`} className="more-btn">Find out more</Link>
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default CitiesProp;