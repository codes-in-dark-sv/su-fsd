/**
 * Enumeration for sorting options based on date and file name.
 * 
 * @enum {number}
 * @property {number} DATE_ASC - Sort files in ascending order by date.
 * @property {number} DATE_DESC - Sort files in descending order by date.
 * @property {number} FILENAME_ASC - Sort files in ascending order by file name.
 * @property {number} FILENAME_DESC - Sort files in descending order by file name.
 */
export enum SORT_BY {
  DATE_ASC,
  DATE_DESC,
  FILENAME_ASC,
  FILENAME_DESC,
}

/**
 * Enumeration for specifying the order of sorting.
 * 
 * @enum {string}
 * @property {string} ASCENDING - Represents ascending sort order.
 * @property {string} DESCENDING - Represents descending sort order.
 */
export enum SortOrder {
  ASCENDING = 'ASC',
  DESCENDING = 'DESC',
}
