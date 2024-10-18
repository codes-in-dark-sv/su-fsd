import { SortOrder } from "@/enums/sort";

/**
 * Sorts an array of objects alphanumerically based on a specific key and order.
 *
 * This function can handle alphanumeric values, meaning it will sort strings
 * containing both letters and numbers in a natural order. If the key value contains
 * numeric parts, it will compare the numeric values accordingly. If the key value 
 * contains non-numeric parts, it will sort the strings lexically using locale comparison.
 * 
 * Example:
 * For an array with file names like ['1abc', '0010abc'], this function will sort
 * them correctly as ['1abc', '0010abc'] in ascending order.
 *
 * @param data - Array of objects to be sorted.
 * @param keyToCompareWith - The key in the object that will be used for comparison.
 * @param order - Sorting order, either ascending (SortOrder.ASCENDING) or descending (SortOrder.DESCENDING).
 * @returns Sorted array of objects based on the specified key and order.
 */
export const sortAlphaNumeric = (
  data: any[], 
  keyToCompareWith: string, 
  order: SortOrder
) => {
  return data.sort((a, b) => {
    const valA = a[keyToCompareWith].toString().toLowerCase();
    const valB = b[keyToCompareWith].toString().toLowerCase();

    const numA = valA.match(/\d+/g) ? parseInt(valA.match(/\d+/g)![0]) : valA;
    const numB = valB.match(/\d+/g) ? parseInt(valB.match(/\d+/g)![0]) : valB;

    if (typeof numA === "number" && typeof numB === "number") {
      return order === SortOrder.ASCENDING ? numA - numB : numB - numA;
    } else {
      if (order === SortOrder.ASCENDING) {
        return valA.localeCompare(valB);
      } else {
        return valB.localeCompare(valA);
      }
    }
  });
};
