import React, { useState } from 'react';

import data from '../data/project/ProjectData.json'
const jsonData = data;
const FilteredDataComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filter the array based on the selected category
  const filteredData = jsonData.filter(obj =>
    obj.category.some(category => category.toLowerCase().includes(selectedCategory.toLowerCase()))
  );

  return (
    <div>
      <h2>Filtered Data</h2>
      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {/* Render options for all unique categories in the JSON data */}
        {jsonData.reduce((categories, obj) => {
          obj.category.forEach(category => {
            if (!categories.includes(category)) {
              categories.push(category);
            }
          });
          return categories;
        }, []).map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <ul>
        {/* Render the filtered data */}
        {filteredData.map(obj => (
          <li key={obj.id}>
            <h3>{obj.title}</h3>
            <p>{obj.excerpt}</p>
            <span className="subtitle">
					{obj.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredDataComponent;
