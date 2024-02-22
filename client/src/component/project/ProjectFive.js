import React, { useEffect, useState } from "react";
import ProjectPropOne from "./itemProp/ProjectPropOne";
import { useApiCalls } from "../../Hooks/useApiCalls";


const ProjectFive = ({ colSize, parentClass, perPageShow }) => {

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
    <div
      className={`section section-padding-equal pt--200 pt_md--80 pt_sm--60 ${
        parentClass ? parentClass : ""
      }`}
    >
      <div className="container-fluid plr--30">
        <div
          className={`row row-cols-1 ${
            colSize ? colSize : "row-cols-sm-2 row-cols-xl-3"
          }`}
        >
          {portfolios.map((portfoliData) => (
            <div className="col" key={portfoliData.id}>
              <ProjectPropOne projectStyle="" portfolio={portfoliData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFive;
