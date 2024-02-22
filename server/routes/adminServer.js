const express = require('express');
const router = express.Router();
const Blog = require('../Models/BlogModel');
const multer = require('multer');
const cors = require('cors');
const methodOverride = require('method-override');
const fs = require('fs');
const _ = require('lodash');
const Category = require('../Models/CategoriesModel');
const cloudinary = require('cloudinary');
const Admin = require('../Models/Admin');
const sendToken = require('../utils/jwtToken');
const ErrorHandler = require('../utils/ErrorHandler');
const PortfolioCategory = require('../Models/PortfolioCategories');
const Portfolio = require('../Models/Portfolio');
const TeamCategory = require('../Models/TeamCategory');
const Team = require('../Models/Team');
const News = require('../Models/News');
const Cities = require('../Models/Cities');
const Clients = require('../Models/Clients');
const Form = require('../Models/Forms');
const TwoSideMails = require('../utils/TwoSideMail');
const AdminSideMailBody = require('../utils/EmailBody/toAdmin');
const ClientSideMailBody = require('../utils/EmailBody/toClient');



router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);
router.use(cors());
router.use(methodOverride('_method'));

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploaded-images');
  },
  filename: (req, file, cb) => {
    cb(null, 'IMAGE-' + Date.now() + file.originalname);
  },
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/gif'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only jpeg, png, gif images are allowed'));
    }
  },
});

router.get('/admin', async (req, res) => {
  Blog.find({}, { _id: 1, title: 1, createdAt: 1, post_date: 1, large_thumb: 1, excerpt: 1, read_time: 1, author: 1, category: 1, slug: 1, })
    .sort({ _id: -1 })
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.get('/admin/categories', async (req, res) => {
  Blog.find({}, { _id: 1, category: 1 })
    .sort({ _id: -1 })
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/admin/pagination', async (req, res) => {
  const page = req.query.page || 1;
  const ITEMS_PER_PAGE = req.query.limit || 10
  try {
    const result = await Blog.find({}, { _id: 1, title: 1, createdAt: 1, post_date: 1, large_thumb: 1, excerpt: 1, read_time: 1, author: 1, category: 1, slug: 1, })
      .sort({ _id: -1 })
      .skip((page - 1) * ITEMS_PER_PAGE)
      .limit(ITEMS_PER_PAGE)
      .exec();

    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/register', async (req, res, next) => {
  try {

    const { userName, password } = req.body;
    let user = await Admin.findOne({ userName });

    if (user) {
      return next(new ErrorHandler("Admin already exists", 400));
    }
    user = await Admin.create({
      userName,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})


// router.get('/:publish', (req, res) => {
//   try {
//     const requestTitle = req.params.publish;
//     Blog.findOne({ slug: requestTitle })
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         res.status(500).json({
//           error: err,
//         });
//       });
//   } catch (e) {
//     res.status(500).json({
//       error: e,
//     });
//   }
// });







// router.post('/compose', upload.single('image'), (req, res) => {
//   const {
//     slug,
//     title,
//     description,
//     author,
//     metaTitle,
//     metaDescription,
//     content,
//   } = req.body;

//   const image = req.file.filename;

//   // console.log(image);
//   const newBlog = new Blog({
//     slug: _.kebabCase(_.lowerCase(slug)),
//     title: title,
//     description: description,
//     author: author,
//     updatedAt: new Date(),
//     uploadedImage: image,
//     metatitle: metaTitle,
//     metadescription: metaDescription,
//     pagecontent: content,
//   });
//   Blog.insertMany(newBlog)
//     .then((result) => {
//       res.status(200).json({
//         added_product: result,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
// });



router.post('/login', async (req, res, next) => {
  try {
    const { formData } = req.body;
    const { userName, password } = formData;

    if (!userName || !password) {
      return next(new ErrorHandler("Please provide the all fields!", 400));
    }

    const user = await Admin.findOne({ userName }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Admin doesn't exists!", 400));
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      res.status(500).json({ message: 'Password is incorrect' })
      return;
    }


    sendToken(user, 201, res);

  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error })
  }
})

router.post('/compose', async (req, res) => {
  try {
    const { blogData } = req.body;
    let allImages = blogData?.large_thumb;

    if (allImages.length === 0) {
      res.status(404).json({ message: "No Blog Image is uploaded" });
      return;
    }

    const uploadPromises = allImages.map(async (image) => {
      const myCloud = await cloudinary.v2.uploader.upload(image, {
        folder: 'hirola-blogs',
      });

      return {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    });

    const uploadedImages = await Promise.all(uploadPromises);

    await new Blog({ ...blogData, large_thumb: uploadedImages }).save()

    res.status(200).json({ success: true, message: 'Published Blog Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

});

router.get('/portfolio', (req, res) => {
  Portfolio.find()
    .sort({ _id: -1 })
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.post('/portfolio/compose', async (req, res) => {
  try {
    const { data } = req.body;
    let allImages = data?.thumb;

    if (!allImages) {
      res.status(404).json({ message: "No Blog Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      const myCloud = await cloudinary.v2.uploader.upload(allImages, {
        folder: 'portfolio',
      });

      return {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    };

    const uploadedImages = await uploadPromises(allImages);

    await new Portfolio({ ...data, thumb: uploadedImages }).save()

    res.status(200).json({ success: true, message: 'Added Portfolio Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      console.log(validationErrors)
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

});



router.get("/category", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories })
  } catch (error) {
    res.status(400).json({ message: error })
  }
});


router.post('/category', async (req, res) => {
  const { category } = req.body;
  try {
    if (!category) {
      res.status(400).json({ message: "Category is required" })
      return;
    }
    const foundCategory = await Category.find({ category })
    if (foundCategory.length === 0) {
      await new Category({ category }).save()
      res.status(200).json({ message: "Added Category Successfully" })
      return;
    }
    res.status(400).json({ message: "Category already exist!" })
    return;
  } catch (error) {
    res.status(400).json({ message: error })
  }
})

router.post('/portfolioCategory', async (req, res) => {
  const { portfolioCategory } = req.body;
  try {
    if (!portfolioCategory) {
      res.status(400).json({ message: "Category is required" })
      return;
    }
    const foundCategory = await PortfolioCategory.find({ portfolioCategory })
    if (foundCategory.length === 0) {
      await new PortfolioCategory({ portfolioCategory }).save()
      res.status(200).json({ message: "Added Category Successfully" })
      return;
    }
    res.status(400).json({ message: "Category already exist!" })
    return;
  } catch (error) {
    res.status(400).json({ message: error })
  }
})

router.get("/portfolioCategory", async (req, res) => {
  try {
    const categories = await PortfolioCategory.find({});
    res.status(200).json({ categories })
  } catch (error) {
    res.status(400).json({ message: error })
  }
});


router.get('/blog/edit/:id', (req, res) => {
  const requestID = req.params.id;
  Blog.findOne({ _id: requestID })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


// router.put('/update/:id', upload.single('image'), (req, res) => {
//   const requestedId = req.params.id;
//   const {
//     slug,
//     title,
//     description,
//     author,
//     metaTitle,
//     metaDescription,
//     content,
//   } = req.body;

//   if (req.file) {
//     const image = req.file.filename;
//     Blog.findOneAndUpdate(
//       { _id: requestedId },
//       {
//         $set: {
//           slug: _.kebabCase(_.lowerCase(slug)),
//           title: title,
//           description: description,
//           author: author,
//           uploadedImage: image,
//           metatitle: metaTitle,
//           metadescription: metaDescription,
//           pagecontent: content,
//         },
//       }
//     )
//       .then((result) => {
//         res.status(200).json({
//           updated_product: result,
//         });
//         if (result.uploadedImage) {
//           fs.unlinkSync(
//             `public/uploaded-images/${result.uploadedImage}`,
//             (err) => {
//               console.log('Deleted image from folder');
//             }
//           );
//         } else {
//           console.log('Image not exist');
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({
//           error: err,
//         });
//       });
//   } else {
//     Blog.findOneAndUpdate(
//       { _id: requestedId },
//       {
//         $set: {
//           slug: _.kebabCase(_.lowerCase(slug)),
//           title: title,
//           description: description,
//           author: author,
//           // uploadedImage: image,
//           metatitle: metaTitle,
//           metadescription: metaDescription,
//           pagecontent: content,
//         },
//       }
//     )
//       .then((result) => {
//         res.status(200).json({
//           updated_product: result,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({
//           error: err,
//         });
//       });
//   }
// });

router.put('/update/:id', async (req, res) => {
  try {
    const { blogEdit } = req.body;
    const { id } = req.params;
    let allImages = blogEdit?.large_thumb;


    if (allImages.length === 0) {
      res.status(404).json({ message: "No Blog Image is uploaded" });
      return;
    }

    const uploadPromises = allImages.map(async (image) => {

      if (typeof image === "string") {
        const myCloud = await cloudinary.uploader.upload(image, {
          folder: 'hirola-blogs',
        });

        return {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      } else {
        return image
      }
    });


    const uploadedImages = await Promise.all(uploadPromises);

    await Blog.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          slug: blogEdit?.slug,
          title: blogEdit?.title,
          blogDescription: blogEdit?.blogDescription,
          large_thumb: uploadedImages,
          category: blogEdit?.category,
          metatitle: blogEdit?.metaTitle,
          metadescription: blogEdit?.metaDescription,
          body: blogEdit?.body,
          excerpt: blogEdit?.excerpt,
          read_time: blogEdit?.read_time,
        },
      }
    )

    res.status(200).json({ success: true, message: 'Published Blog Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

const DeleteCloudinaryImage = async (public_id) => {
  try {
    await cloudinary.v2.uploader.destroy(public_id);
    return "Success"
  } catch (error) {
  }
}

router.put('/portfolio/:id', async (req, res) => {
  try {
    const { data } = req.body;
    const { id } = req.params;
    let allImages = data?.thumb;

    let prevData = await Portfolio.findById(id);


    if (!allImages) {
      res.status(404).json({ message: "No Blog Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      if (typeof allImages === 'string') {
        const myCloud = await cloudinary.v2.uploader.upload(allImages, {
          folder: 'portfolio',
        });

        await DeleteCloudinaryImage(prevData?.thumb?.public_id)

        return {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      } else {
        return allImages
      }

    };


    const uploadedImages = await uploadPromises(allImages);

    await Portfolio.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: data?.title,
          thumb: uploadedImages,
          category: data?.category,
          body: data?.body,
          excerpt: data?.excerpt,
        },
      }
    )

    res.status(200).json({ success: true, message: 'Updated Portfolio Successfull' })

  } catch (error) {
    console.log(error)
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

router.delete('/portfolio/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let prevData = await Portfolio.findById(id);
    await DeleteCloudinaryImage(prevData?.thumb?.public_id)
    await Portfolio.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Updated Portfolio Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
})

router.get('/portfolio/:id', (req, res) => {
  const { id } = req.params;
  Portfolio.findById(id)
    .then((result) => {
      return res.status(200).json({ success: true, data: result });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});








router.get("/teamCategory", async (req, res) => {
  try {
    const categories = await TeamCategory.find({});
    res.status(200).json({ categories })
  } catch (error) {
    res.status(400).json({ message: error })
  }
});

router.post('/teamCategory', async (req, res) => {
  const { teamCategory } = req.body;
  try {
    if (!teamCategory) {
      res.status(400).json({ message: "Category is required" })
      return;
    }
    const foundCategory = await TeamCategory.find({ teamCategory })
    if (foundCategory.length === 0) {
      await new TeamCategory({ teamCategory }).save()
      res.status(200).json({ message: "Added Category Successfully" })
      return;
    }
    res.status(400).json({ message: "Category already exist!" })
    return;
  } catch (error) {
    res.status(400).json({ message: error })
  }
})

router.get('/team', (req, res) => {
  Team.find()
    .sort({ _id: -1 })
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.post('/team/compose', async (req, res) => {
  try {
    const { data } = req.body;
    let allImages = data?.thumb;

    if (!allImages) {
      res.status(404).json({ message: "No Blog Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      const myCloud = await cloudinary.v2.uploader.upload(allImages, {
        folder: 'team',
      });

      return {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    };

    const uploadedImages = await uploadPromises(allImages);

    await new Team({ ...data, thumb: uploadedImages }).save()

    res.status(200).json({ success: true, message: 'Added Portfolio Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

});

router.get('/team/:id', (req, res) => {
  const { id } = req.params;
  Team.findById(id)
    .then((result) => {
      return res.status(200).json({ success: true, data: result });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.put('/team/:id', async (req, res) => {
  try {
    const { data } = req.body;
    const { id } = req.params;
    let allImages = data?.thumb;

    let prevData = await Team.findById(id);


    if (!allImages) {
      res.status(404).json({ message: "No Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      if (typeof allImages === 'string') {
        const myCloud = await cloudinary.v2.uploader.upload(allImages, {
          folder: 'team',
        });

        await DeleteCloudinaryImage(prevData?.thumb?.public_id)

        return {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      } else {
        return allImages
      }

    };


    const uploadedImages = await uploadPromises(allImages);

    await Team.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: data?.title,
          thumb: uploadedImages,
          category: data?.category,
          designation: data?.designation,
          description: data?.description,
        },
      }
    )

    res.status(200).json({ success: true, message: 'Updated Team Successfull' })

  } catch (error) {
    console.log(error)
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

router.delete('/team/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let prevData = await Team.findById(id);
    await DeleteCloudinaryImage(prevData?.thumb?.public_id)
    await Team.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Updated Team Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
})








router.get('/news', (req, res) => {
  News.find()
    .sort({ _id: -1 })
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.post('/news/compose', async (req, res) => {
  try {
    const { data } = req.body;
    let allImages = data?.Dimage;

    if (!allImages) {
      res.status(404).json({ message: "No News Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      const myCloud = await cloudinary.v2.uploader.upload(allImages, {
        folder: 'news',
      });

      return {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    };

    const uploadedImages = await uploadPromises(allImages);

    await new News({ ...data, Dimage: uploadedImages }).save()

    res.status(200).json({ success: true, message: 'Added News Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

});

router.get('/news/:id', (req, res) => {
  const { id } = req.params;
  News.findById(id)
    .then((result) => {
      return res.status(200).json({ success: true, data: result });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.put('/news/:id', async (req, res) => {
  try {
    const { data } = req.body;
    const { id } = req.params;
    let allImages = data?.Dimage;

    let prevData = await News.findById(id);


    if (!allImages) {
      res.status(404).json({ message: "No Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      if (typeof allImages === 'string') {
        const myCloud = await cloudinary.v2.uploader.upload(allImages, {
          folder: 'news',
        });

        await DeleteCloudinaryImage(prevData?.Dimage?.public_id)

        return {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      } else {
        return allImages
      }

    };


    const uploadedImages = await uploadPromises(allImages);

    await News.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: data?.title,
          Dimage: uploadedImages,
          description: data?.description,
          link: data?.link
        },
      }
    )

    res.status(200).json({ success: true, message: 'Updated News Successfull' })

  } catch (error) {
    console.log(error)
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

router.delete('/news/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let prevData = await News.findById(id);
    await DeleteCloudinaryImage(prevData?.Dimage?.public_id)
    await News.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Updated News Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
})







router.get('/cities', (req, res) => {
  Cities.find()
    // .sort({ _id: -1 })
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.post('/cities/compose', async (req, res) => {
  try {
    const { data } = req.body;
    let allImages = data?.Dimage;

    if (!allImages) {
      res.status(404).json({ message: "No City Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      const myCloud = await cloudinary.v2.uploader.upload(allImages, {
        folder: 'cities',
      });

      return {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    };

    const uploadedImages = await uploadPromises(allImages);

    await new Cities({ ...data, Dimage: uploadedImages }).save()

    res.status(200).json({ success: true, message: 'Added City Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

});

router.get('/cities/:id', (req, res) => {
  const { id } = req.params;
  Cities.findById(id)
    .then((result) => {
      return res.status(200).json({ success: true, data: result });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.put('/cities/:id', async (req, res) => {
  try {
    const { data } = req.body;
    const { id } = req.params;
    let allImages = data?.Dimage;

    let prevData = await Cities.findById(id);


    if (!allImages) {
      res.status(404).json({ message: "No Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      if (typeof allImages === 'string') {
        const myCloud = await cloudinary.v2.uploader.upload(allImages, {
          folder: 'cities',
        });

        await DeleteCloudinaryImage(prevData?.Dimage?.public_id)

        return {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      } else {
        return allImages
      }

    };


    const uploadedImages = await uploadPromises(allImages);

    await Cities.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          cityName: data?.cityName,
          Dimage: uploadedImages,
          Address: data?.Address,
        },
      }
    )

    res.status(200).json({ success: true, message: 'Updated City Successfull' })

  } catch (error) {
    console.log(error)
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

router.delete('/cities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let prevData = await Cities.findById(id);
    await DeleteCloudinaryImage(prevData?.Dimage?.public_id)
    await Cities.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Updated City Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
})





router.get('/clients', (req, res) => {
  Clients.find()
    .sort({ _id: -1 })
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.post('/clients/compose', async (req, res) => {
  try {
    const { data } = req.body;
    let allImages = data?.Dimage;

    if (!allImages) {
      res.status(404).json({ message: "No Client Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      const myCloud = await cloudinary.v2.uploader.upload(allImages, {
        folder: 'clients',
      });

      return {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    };

    const uploadedImages = await uploadPromises(allImages);

    await new Clients({ ...data, Dimage: uploadedImages }).save()

    res.status(200).json({ success: true, message: 'Added Client Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

});

router.get('/clients/:id', (req, res) => {
  const { id } = req.params;
  Clients.findById(id)
    .then((result) => {
      return res.status(200).json({ success: true, data: result });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.put('/clients/:id', async (req, res) => {
  try {
    const { data } = req.body;
    const { id } = req.params;
    let allImages = data?.Dimage;

    let prevData = await Clients.findById(id);


    if (!allImages) {
      res.status(404).json({ message: "No Image is uploaded" });
      return;
    }

    const uploadPromises = async (allImages) => {
      if (typeof allImages === 'string') {
        const myCloud = await cloudinary.v2.uploader.upload(allImages, {
          folder: 'clients',
        });

        await DeleteCloudinaryImage(prevData?.Dimage?.public_id)

        return {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      } else {
        return allImages
      }

    };


    const uploadedImages = await uploadPromises(allImages);

    await Clients.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          clientName: data?.clientName,
          Dimage: uploadedImages,
        },
      }
    )

    res.status(200).json({ success: true, message: 'Updated Client Successfull' })

  } catch (error) {
    console.log(error)
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

router.delete('/clients/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let prevData = await Clients.findById(id);
    await DeleteCloudinaryImage(prevData?.Dimage?.public_id)
    await Clients.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Updated Client Successfull' })

  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
})






router.post('/form', async (req, res) => {
  try {
    const { name,
      email,
      phone,
      company,
      service } = req.body;


    await new Form({
      name,
      email,
      phone,
      company,
      service
    }).save()

    res.status(200).json({ Status: "Success", success: true, message: 'Submitted Form Successfull' })

    let adminBody = await AdminSideMailBody({ name, email, phone, company, service });
    let clientBody = await ClientSideMailBody({ service })

    let adminSide = {
      subject: 'New Hirola Infotech Form',
      html: adminBody
    }

    let userSide = {
      email,
      subject: 'Hirola Infotech Solution pvt ltd',
      html: clientBody
    }

    await TwoSideMails(adminSide, userSide)


  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

});

router.get('/form', (req, res) => {
  Form.find()
    .sort({ _id: -1 })
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});





router.delete('/delete-Img/:public_id/:blogId', async (req, res) => {
  try {
    const { public_id, blogId } = req.params;
    await cloudinary.v2.uploader.destroy(public_id);
    await Blog.updateOne(
      { _id: blogId },
      { $pull: { large_thumb: { public_id } } }
    )

    res.status(200).json({ message: 'Deleted Image Successfully!' })

  } catch (error) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
});

router.delete('/blog/delete/:id', upload.single('image'), (req, res) => {
  const requestedId = req.params.id;
  try {
    Blog.findByIdAndDelete({ _id: requestedId })
      .then((result) => {
        res.status(200).json({
          deleted_product: result,
        });
        console.log('Deleted from db');
        if (result.uploadedImage) {
          fs.unlinkSync(
            `public/uploaded-images/${result.uploadedImage}`,
            (err) => {
              console.log('Deleted image from folder');
            }
          );
        } else {
          console.log('Image not exist');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: e,
    });
  }
});


router.get('/blog/:publish', async (req, res) => {
  try {
    const requestTitle = req.params.publish;
    const result = await Blog.findOne({ slug: requestTitle });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (e) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
});




module.exports = router;
