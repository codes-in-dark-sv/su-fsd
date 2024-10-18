import { SORT_BY } from "@/enums/sort";
import React from "react";

/**
 * Props for the FileDetailsCard component.
 * 
 * @interface FileDetailsCardProps
 * @property {string} date - The date associated with the file.
 * @property {string} fileName - The name of the file.
 */
export interface FileDetailsCardProps {
  date: string;
  fileName: string;
}

/**
 * Props for the GridComponent.
 * 
 * @interface GridComponentProps
 * @property {React.ReactNode[]} items - An array of React nodes to be rendered in the grid.
 * @property {number} columns - The number of columns in the grid layout.
 */
export interface GridComponentProps {
  items: React.ReactNode[];
  columns: number;
}

/**
 * Props for the SortDropdown component.
 * 
 * @interface SortDropdownProps
 * @property {SORT_BY} sortOrder - The current sorting order selected from the dropdown.
 * @property {(event: React.ChangeEvent<{ value: unknown }>) => void} onSortChange - Callback function to handle sort order changes.
 */
export interface SortDropdownProps {
  sortOrder: SORT_BY;
  onSortChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}
