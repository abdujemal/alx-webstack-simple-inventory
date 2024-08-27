// services/firebaseService.js
import admin from 'firebase-admin';
import path from 'path'
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export const uploadImageToFirebase = async (file) => {
    const storageRef = admin.storage().bucket();

    const filename = `${Date.now()}_${path.basename(file.originalname)}`;

    const p =  path.join(__dirname, 'uploads', file.filename)

    // Upload the File
    const storage = await storageRef.upload(p, {
        public: true,
        destination: `uploads/${filename}`,
        metadata: {
            firebaseStorageDownloadTokens: randomUUID(),
        }
    });


    return storage[0].metadata.mediaLink;
}



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
