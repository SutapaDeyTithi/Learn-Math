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
