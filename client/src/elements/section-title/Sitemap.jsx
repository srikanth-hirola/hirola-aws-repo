import React, { useState, useEffect } from 'react';

const Sitemap = () => {
  const [sitemap, setSitemap] = useState('');

  useEffect(() => {
    fetchSitemap();
  }, []);

  const fetchSitemap = async () => {
    try {
      const response = await fetch('http://localhost:8000/sitemap.xml');
      if (!response.ok) {
        throw new Error(`Failed to fetch sitemap. Status: ${response.status}`);
      }
      const data = await response.text();
      console.log("data", data);
      setSitemap(data);
    } catch (error) {
      console.error("Error fetching sitemap:", error.message);
    }
  };
  

  return (
    <div>
      <h2>Sitemap</h2>
      {sitemap && (
        <>
          <pre>{sitemap}</pre>
          <p>Details also logged in the console.</p>
        </>
      )}
    </div>
  );
};

export default Sitemap;
