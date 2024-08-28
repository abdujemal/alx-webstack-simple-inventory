// services/firebaseService.js
import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const uploadImageToFirebase = async (file) => {
    const filePath = path.join(__dirname, 'uploads', file.filename);
    const filename = `${Date.now()}_${file.originalname}`;
    const bucket = admin.storage().bucket();
    try {
        const file = bucket.file(`uploads/${filename}`);

        await file.save(fs.readFileSync(filePath), {
        metadata: {
            contentType: 'image/jpeg',  // Adjust the content type according to the file type
            firebaseStorageDownloadTokens: uuidv4(),
        },
        });

        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(file.name)}?alt=media`;

        return publicUrl;
    } catch (error) {
        console.error('Error uploading file to Firebase:', error);
        throw error;
    }
};