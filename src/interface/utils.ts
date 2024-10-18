/**
 * Represents the response structure for reading CSV file data.
 * 
 * @interface CsvFileDataReadResponse
 * @property {string} fileCreatedAt - The date and time when the file was created, formatted as a string.
 * @property {string} fileName - The name of the file.
 * @property {number} fileCreatedAtInMillis - The timestamp of the file creation date in milliseconds since the Unix epoch.
 */
export interface CsvFileDataReadResponse {
  fileCreatedAt: string;
  fileName: string;
  fileCreatedAtInMillis: number;
}
