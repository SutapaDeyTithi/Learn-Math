const multer = require('multer');
const uuid = require('uuid').v4; //adds a hash with the filename; didn't use it 
const path =  require('path');
const fs = require('fs');

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

module.exports.neww = [upload.single('file'), function(req, res) {
    return res.json({ status: 'OK', uploaded: true });
}];
