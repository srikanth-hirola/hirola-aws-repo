import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from "../../data/products/ProductsMain.json";
const allData = ProductData;


const ProductPropOne = ({colSize, serviceStyle}) => {

    return (
		<>
			{allData.map((data, index) => (
				<div className={colSize} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} loading="lazy" alt="icon" className='icon-img' />
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link to={process.env.PUBLIC_URL + `/products/${data.slug}`}>{data.title}</Link>
							</h5>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + `/products/${data.slug}`} className="more-btn">Find out more</Link>
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ProductPropOne;