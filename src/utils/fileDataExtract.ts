import Papa from 'papaparse';
import { CsvFileDataReadResponse } from '@/interface/utils';

/**
 * Loads CSV data from a specified file path.
 *
 * This asynchronous function fetches the CSV file from the given path, 
 * parses its content, and returns the data as an array of objects 
 * conforming to the `CsvFileDataReadResponse` type.
 *
 * @param filePath - The path to the CSV file to be loaded.
 * @returns A promise that resolves to an array of parsed CSV data objects.
 */
export const loadCsvData = async (filePath: string): Promise<CsvFileDataReadResponse[]> => {
  try {
    const response = await fetch(filePath);
    
    if (!response.ok) {
      throw new Error(`Failed to load CSV: ${response.statusText}`);
    }

    const text = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(text, {
        header: false,
        complete: (results) => {
          if (results.errors.length) {
            reject(`CSV parsing errors: ${JSON.stringify(results.errors)}`);
          } else {
            try {
              const formattedData: CsvFileDataReadResponse[] = results.data.map((row: any) => {
                if (Array.isArray(row) && row.length === 2) {
                  const fileCreatedAt = row[0];
                  const fileCreatedAtInMillis = new Date(fileCreatedAt).getTime(); // Convert to milliseconds
                  
                  if (isNaN(fileCreatedAtInMillis)) {
                    throw new Error('Invalid date format in CSV');
                  }

                  return {
                    fileCreatedAt: row[0],
                    fileName: row[1],
                    fileCreatedAtInMillis: fileCreatedAtInMillis,
                  };
                } else {
                  throw new Error('Malformed row detected in CSV');
                }
              });

              resolve(formattedData);
            } catch (formattingError) {
              reject(`Error formatting CSV data: ${formattingError.message}`);
            }
          }
        },
        error: (error: any) => {
          reject(`Error during parsing: ${error.message}`);
        },
      });
    });
  } catch (error) {
    throw new Error(`Error loading CSV data: ${error.message}`);
  }
};
