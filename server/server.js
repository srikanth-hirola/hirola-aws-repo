const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary");
const cors = require('cors');
const ConnectDatabase = require('./db_connection');
const compression = require('compression')

const app = express();
const { SitemapStream, streamToPromise } = require('sitemap');
app.use(compression())
const PORT = process.env.PORT || 8000;

const adminRoutes = require('./routes/adminServer');
const frontEndRoutes = require('./routes/feServer');
const cookieParser = require('cookie-parser');

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://hirolaits.com',
  'https://hirolainfotech.com',
  'https://www.hirolaits.com',
  'https://www.hirolainfotech.com',
];

ConnectDatabase();

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}


app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowedOrigins array
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use('/public', express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true, limit: '500mb' }));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use('/', frontEndRoutes);
app.use('/admin', adminRoutes);

app.get('/res', (req, res) => {
  console.log("first")
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});

app.get('/sitemap.xml', async (req, res) => {
  try {
    const urls = await generateUrls(); // You need to implement the function to fetch your URLs dynamically
    const sitemap = await generateSitemap(urls);

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

async function generateUrls() {
  // Implement logic to fetch and return URLs dynamically
  // Example: Fetch URLs from a database or API
  const response = await axios.get('http://localhost:8000/urls');
  return response.data.urls;
}

async function generateSitemap(urls) {
  const stream = new SitemapStream({ hostname: 'http://localhost:8000/' });

  urls.forEach((url) => {
    stream.write({ url, changefreq: 'daily', priority: 0.7 });
  });

  stream.end();

  return streamToPromise(stream).then((data) => data.toString());
}