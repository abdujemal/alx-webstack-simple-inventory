// middleware/multer.js
import multer  from 'multer';
import  path from 'path';

const storage = multer.diskStorage(
  
  {
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Destination folder for uploaded files
    },
    filename: (req, file, cb) => {
        // Generate a unique filename with the original extension
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}${ext}`;
        cb(null, filename);
    }
}
);

const upload = multer({ storage });

export default upload