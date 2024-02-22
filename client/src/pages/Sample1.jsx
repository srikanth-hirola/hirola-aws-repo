import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils';
import SectionTitle from '../elements/section-title/SectionTitle';
import Tilty from 'react-tilty';
import { useApiCalls } from '../Hooks/useApiCalls';

const filters = [
  {
    id: 1,
    label: "All Works",
  },
  {
    id: 2,
    label: "Website",
  },
  {
    id: 3,
    label: "SMM",
  },
  {
    id: 4,
    label: "PPC",
  },
  {
    id: 5,
    label: "Digital Marketing",
  },  {
    id: 6,
    label: "Branding",
  }
  ,  {
    id: 7,
    label: "PR",
  }
];

const FilteredDataComponent = ({projectStyle, portfolio,columnGap,itemShow}) => {
  //   const [selectedCategory, setSelectedCategory] = useState('All Works');

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };

  const [loading, setLoading] = useState(false);
  const [portfolios, setportfolio] = useState([]);
  console.log("portfolio", portfolios)
  const [pagefound, setPageFound] = useState('');

  const { fetchBunchData } = useApiCalls();

  const [selectedCategory, setSelectedCategory] = useState('All Works');
  const [activeCategory, setActiveCategory] = useState('All Works');

const handleCategoryChange = (category) => {
  setSelectedCategory(category);
  setActiveCategory(category);

};

  const filterData = () => {
    if (selectedCategory === '' || selectedCategory === 'All Works'){
      return portfolios.slice(0,12);  
    }
    return portfolios.filter(obj =>
      obj.category.some(category => category.toLowerCase().includes(selectedCategory.toLowerCase()))
    );
  };

  const filteredData = filterData();

  // Function to divide an array into chunks of given size
  function chunkArray(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }

  useEffect(() => {
    let endpoint = 'admin/portfolio'
    fetchBunchData(endpoint, setLoading, setportfolio, setPageFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <div>

      <div>
        {/* Render the filtered data into  columns */}
       <div className="container">
       <div className="isotope-button isotope-project-btn mt-5 pt-3">
     <SectionTitle 
                        subtitle="Our Portfolio"
                        title="Some of our  finest work."
                        textAlignment="heading-left mb--40"
                        textColor=""
                    />
      {filters.map(filter => (
        <button key={filter.id} onClick={() => handleCategoryChange(filter.label)}
        style={{
      background: activeCategory === filter.label ? 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)' : 'transparent',
      color: activeCategory === filter.label ? '#fff' : '#000',
      borderRadius: activeCategory === filter.label ? '12px' : '0px',
    }}
        >
          {filter.label}
        </button>
      ))}
   
      </div>
        {/* <div className='row justify-content-between'> */}
        <div className='row justify-content-start'>
           {
            filteredData.reverse().map((portfolio)=>(
              
                <div className="col-md-6 col-lg-2 col-xl-2 "> {/* Use class of pot-cards if required  */}
                {/* <Tilty perspective={12000} reset={true}> */}
                <div className='project-grid active '>
				<div className="thumbnail">
				<Link to={process.env.PUBLIC_URL + `/portfolio/${slugify(portfolio.title)}`}>
					<img src={process.env.PUBLIC_URL + portfolio.thumb.url} loading="lazy" alt="icon" />
				</Link>
				</div>
				<div className="content">
				<h4 className="title"> 
					<Link to={process.env.PUBLIC_URL + `/portfolio/${slugify(portfolio.title)}`}>{portfolio.title}</Link>
				</h4>
				<span className="subtitle">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
				</div>
			</div>
{/* // </Tilty> */}
            </div>
            ))
           }
          </div>
      
       </div>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  padding: '20px',
  flex: '1',
  marginRight: '20px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '10px',
};

const cardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export default FilteredDataComponent;
