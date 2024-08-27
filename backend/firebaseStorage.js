// services/firebaseService.js
import admin from 'firebase-admin';
import path from 'path';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export const uploadImageToFirebase = async (file) => {
  try {
    const storageRef = admin.storage().bucket();
    const filename = `${Date.now()}_${path.basename(file.originalname)}`;
    const filePath = path.join(__dirname, 'uploads', file.filename);

    // Ensure the file exists before uploading
    if (!fs.existsSync(filePath)) {
      throw new Error(`File does not exist: ${filePath}`);
    }

    // Upload the file
    const [uploadedFile] = await storageRef.upload(filePath, {
      public: true,
      destination: `uploads/${filename}`,
    });

    // Return the public URL
    return uploadedFile.metadata.mediaLink;
  } catch (e) {
    console.error('Error uploading image to Firebase:', e.message);
    throw new Error(e.message);
  }
};




// import serviceAccount from '../../../adminKey.json'; // Path to your serviceAccountKey.json

// export const uploadImageToFirebase = async (file) => {
//     const bucket = admin.storage().bucket();

//     if (!file) {
//       throw new Error('No file provided');
//     }
  
//     // Create a file name
//     const fileName = `${Date.now()}_${path.basename(file.originalname)}`;
  
//     // Create a reference to the file in Firebase Storage
//     const fileRef = bucket.file(fileName);
    
//     try {
//       // Upload the file buffer directly to Firebase Storage
//       await fileRef.save(file.buffer, {
//         metadata: {
//           contentType: file.mimetype, // Set the appropriate content type
//         },
//       });
  
//       // Make the file publicly accessible
//       await fileRef.makePublic();
  
//       // Get the public URL of the uploaded file
//       const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
      
//       console.log(`${fileName} uploaded to Firebase Storage.`);
//       return publicUrl;
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       throw error;
//     }
//   };
  
// export const uploadImageToFirebase = async (file) => {
//     const bucket = admin.storage().bucket();
//     const fileName = `${Date.now()}_${path.basename(file.originalname)}`;

//     // Create a file object in Firebase Storage
//     const fileObject = bucket.file(fileName);

//     await fileObject.create({
//             metadata: {
//                 contentType: file.mimetype, // Set the appropriate content type
//             },
//         }
//     )
//   return new Promise((resolve, reject) => {
//     if (!file) {
//       return reject(new Error('No file provided'));
//     }

//     // Create a file name
//     const fileName = `${Date.now()}_${path.basename(file.originalname)}`;

//     // Create a file object in Firebase Storage
//     const fileObject = bucket.file(fileName);


//     // Create a stream for the upload
//     const stream = fileObject.createWriteStream({
//       metadata: {
//         contentType: file.mimetype, // Set the appropriate content type
//       },
//     });

//     stream.on('error', (error) => {
//       console.error('Error uploading file:', error);
//       reject(error);
//     });

//     stream.on('finish', async () => {
//       try {
//         // Get the public URL
//         const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

//         console.log(`${fileName} uploaded to Firebase Storage.`);
//         resolve(publicUrl);
//       } catch (error) {
//         reject(error);
//       }
//     });

//     // Pipe the buffer to the stream
//     stream.end(file.buffer);
//   });
// };
