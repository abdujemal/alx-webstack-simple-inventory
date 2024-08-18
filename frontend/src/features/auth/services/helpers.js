export function dataURLtoFile(dataUrl, fileName) {
    // Extract the base64 data and the content type
    const [header, base64Data] = dataUrl.split(',');
    const mimeType = header.match(/:(.*?);/)[1];
  
    // Convert the base64 data to binary data
    const binaryString = atob(base64Data);
    const len = binaryString.length;
    const byteArray = new Uint8Array(len);
  
    for (let i = 0; i < len; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }
  
    // Create a Blob object
    const blob = new Blob([byteArray], { type: mimeType });
  
    // Convert the Blob to a File object
    const file = new File([blob], fileName, { type: mimeType });
  
    return file;
}