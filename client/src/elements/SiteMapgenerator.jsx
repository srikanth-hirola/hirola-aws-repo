import { useEffect, useState } from "react";

const SitemapGenerator = () => {
    const [routes, setRoutes] = useState([]);
  
    useEffect(() => {
      // Extract routes from the Routes component
      const extractRoutes = (route) => {
        if (route.props.path) {
          return [route.props.path];
        }
  
        return route.props.children.flatMap(extractRoutes);
      };
  
      const extractedRoutes = routes.props.children.flatMap(extractRoutes);
      setRoutes(extractedRoutes);
    }, []);
  
    const generateSitemap = () => {
      const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${routes.map((route) => `<url><loc>${process.env.PUBLIC_URL}${route}</loc></url>`).join('\n')}
        </urlset>`;
  
      // Log the generated sitemap (you can save it to a file or send it to the server)
      console.log(sitemapXML);
    };
  
    return (
      <div>
        <h1>Sitemap Generator</h1>
        <button onClick={generateSitemap}>Generate Sitemap</button>
      </div>
    );
  };
  export default SitemapGenerator