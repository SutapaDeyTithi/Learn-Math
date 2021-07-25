const multer = require('multer');
const uuid = require('uuid').v4; //adds a hash with the filename; didn't use it 
const path =  require('path');
const fs = require('fs');
const pool = require("./db");

/// not used this (tithi)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/files/answers')
  },
  filename: (req, file, cb) => {
      const { originalname } = file;
      const filePath = `public/files/answers/${originalname}`;
      console.log(filePath);
      cb(null, originalname);
  }
})

const upload = multer({ storage }); 
// app.use(express.static('public'));

module.exports.answerImage = [upload.single('file'), function(req, res) {
    return res.json({ status: 'OK', uploaded: true });
}];


// tutorial images
var filePathTutorial;
const storageTutorial = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/tutorials')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/tutorials/${originalname}`;
        filePathTutorial = filePath.replace('public/','');
        cb(null, originalname);
    }
  })
  
  const uploadTutorial = multer({ storage: storageTutorial }); 
  // app.use(express.static('public'));
  
  module.exports.TutorialIamge = [uploadTutorial.single('file'), (req, res) => {
      const tutorial_id = req.params.id;
      console.log("tutorial_id --> ", tutorial_id);
      console.log("file path", filePathTutorial);

      pool.query("UPDATE \"Tutorial\" SET figure=$2 WHERE tutorial_id=$1",
        [tutorial_id, filePathTutorial], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("new tutorial figure insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];




// tutorial video
var filePathTutorialVideo;
const storageTutorialVideo = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/tutorials')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/tutorials/${originalname}`;
        filePathTutorialVideo = filePath.replace('public/','');;
        cb(null, originalname);
    }
  })
  
const uploadTutorialVideo = multer({ storage: storageTutorialVideo }); 

module.exports.TutorialVideo = [uploadTutorialVideo.single('file'), (req, res) => {
      const tutorial_id = req.params.id;
      console.log("tutorial_id --> ", tutorial_id);
      console.log("file path", filePathTutorialVideo);

      pool.query("UPDATE \"Tutorial\" SET video=$2 WHERE tutorial_id=$1",
        [tutorial_id, filePathTutorialVideo], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("new tutorial video insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];


// practice problems
// MCQ ques figure
var pathMCQques;
const storageImageMCQques = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/questions')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/questions/${originalname}`;
        pathMCQques = filePath.replace('public/','');;
        cb(null, originalname);
    }
  })
  
const uploadImageMCQques = multer({ storage: storageImageMCQques }); 

module.exports.MCQquesImage = [uploadImageMCQques.single('file'), (req, res) => {
      const ques_id = req.params.id;
      console.log("ques_id --> ", ques_id);
      console.log("file path", pathMCQques);

      pool.query("UPDATE \"MCQ\" SET figure_ques=$2 WHERE question_id=$1",
        [ques_id, pathMCQques], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("new mcq figure_ques insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];


  // MCQ explanation figure
var pathMCQexpln;
const storageMCQexplnImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/questions')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/questions/${originalname}`;
        pathMCQexpln = filePath.replace('public/','');;
        cb(null, originalname);
    }
  })
  
const uploadMCQexplnImage = multer({ storage: storageMCQexplnImage }); 

module.exports.MCQexplnImage = [uploadMCQexplnImage.single('file'), (req, res) => {
      const ques_id = req.params.id;
      console.log("ques_id --> ", ques_id);
      console.log("file path", pathMCQexpln);

      pool.query("UPDATE \"MCQ\" SET figure_explanation=$2 WHERE question_id=$1",
        [ques_id, pathMCQexpln], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("new mcq figure_explanation insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];


// True/False ques figure
var pathTFques;
const storageImageTFques = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/questions')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/questions/${originalname}`;
        pathTFques = filePath.replace('public/','');;
        cb(null, originalname);
    }
  })
  
const uploadImageTFques = multer({ storage: storageImageTFques }); 

module.exports.TFquesImage = [uploadImageTFques.single('file'), (req, res) => {
      const ques_id = req.params.id;
      console.log("ques_id --> ", ques_id);
      console.log("file path", pathTFques);

      pool.query("UPDATE \"True_False\" SET figure_ques=$2 WHERE question_id=$1",
        [ques_id, pathTFques], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("new True/False figure_ques insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];


  // True/False explanation figure
var pathTFexpln;
const storageTFexplnImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/questions')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/questions/${originalname}`;
        pathTFexpln = filePath.replace('public/','');;
        cb(null, originalname);
    }
  })
  
const uploadTFexplnImage = multer({ storage: storageTFexplnImage }); 

module.exports.TFexplnImage = [uploadTFexplnImage.single('file'), (req, res) => {
      const ques_id = req.params.id;
      console.log("ques_id --> ", ques_id);
      console.log("file path", pathTFexpln);

      pool.query("UPDATE \"True_False\" SET figure_explanation=$2 WHERE question_id=$1",
        [ques_id, pathTFexpln], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("new True_False figure_explanation insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];

// Match ques figure
var pathMatchques;
const storageImageMatchques = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/questions')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/questions/${originalname}`;
        pathMatchques = filePath.replace('public/','');;
        cb(null, originalname);
    }
  })
  
const uploadImageMatchques = multer({ storage: storageImageMatchques }); 

module.exports.MatchquesImage = [uploadImageMatchques.single('file'), (req, res) => {
      const ques_id = req.params.id;
      console.log("ques_id --> ", ques_id);
      console.log("file path", pathMatchques);

      pool.query("UPDATE \"Match\" SET figure_ques=$2 WHERE question_id=$1",
        [ques_id, pathMatchques], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("newMatch figure_ques insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];


// Match explanation figure
var pathMatchexpln;
const storageMatchexplnImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/questions')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/questions/${originalname}`;
        pathMatchexpln = filePath.replace('public/','');;
        cb(null, originalname);
    }
  })
  
const uploadMatchexplnImage = multer({ storage: storageMatchexplnImage }); 

module.exports.matchexplnImage = [uploadMatchexplnImage.single('file'), (req, res) => {
      const ques_id = req.params.id;
      console.log("ques_id --> ", ques_id);
      console.log("file path", pathMatchexpln);

      pool.query("UPDATE \"Match\" SET figure_explanation=$2 WHERE question_id=$1",
        [ques_id, pathMatchexpln], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("new Match figure_explanation insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];

//   ---------------- PRACTICE PROBLEMS END ----------------------------------

// WRITTEN QUES FIGURE
var pathWques;
const storageImageWques = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/questions')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const filePath = `public/files/questions/${originalname}`;
        pathWques = filePath.replace('public/','');;
        cb(null, originalname);
    }
  })
  
const uploadImageWques = multer({ storage: storageImageWques }); 

module.exports.WquesImage = [uploadImageWques.single('file'), async(req, res) => {
      const ques_id = req.params.id;
      console.log("ques_id --> ", ques_id);
      console.log("file path", pathWques);

      await pool.query("UPDATE \"ExamQuestion\" SET figure_ques=$2 WHERE question_id=$1",
        [ques_id, pathWques], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    console.log("Written figure_ques insterted ");
                    return res.json({ status: 'OK', uploaded: true });
                }
            }
        ); 
  }];