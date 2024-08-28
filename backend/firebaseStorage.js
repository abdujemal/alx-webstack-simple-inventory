import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

export const uploadImageToFirebase = async (file) => {
  try {
    const storageRef = admin.storage().bucket();
    const filename = `${Date.now()}_${file.originalname}`;

    // Create a reference to the file in Firebase Storage
    const fileRef = storageRef.file(`uploads/${filename}`);

    // Upload the file buffer directly to Firebase Storage
    await fileRef.save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
        firebaseStorageDownloadTokens: uuidv4(),
      },
    });

    // Construct the public URL for the file
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${storageRef.name}/o/${encodeURIComponent(fileRef.name)}?alt=media`;

    return imageUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('Failed to upload file to Firebase Storage');
  }
};
