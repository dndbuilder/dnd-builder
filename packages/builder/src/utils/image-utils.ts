/**
 * Utility functions for handling images
 */

/**
 * Converts a file to a base64 string
 * @param file The file to convert
 * @returns A promise that resolves to the base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Converts an image URL to a base64 string
 * @param url The URL of the image
 * @returns A promise that resolves to the base64 string
 */
export const urlToBase64 = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return await fileToBase64(blob as File);
  } catch (error) {
    console.error('Error converting URL to base64:', error);
    throw error;
  }
};

/**
 * Generates a unique ID for media items
 * @returns A unique ID string
 */
export const generateUniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};