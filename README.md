
---

# CSV File Data Management Application

## Overview

This project is a CSV file data management system built using **React**, **TypeScript**, **Material-UI (MUI)**, and **Next.js**. It showcases reusable components, dynamic sorting, and an optimized data loading mechanism using **PapaParse** for handling CSV files. The application also implements advanced Next.js features like **Suspense**, **Lazy Loading**, and **Error Boundaries** for better performance and UX.

### Key Features:
- CSV file loading and parsing using **PapaParse**
- Dynamic sorting with multiple criteria (by Date, Filename, etc.)
- Reusable UI components for displaying file details
- Sorting dropdown with Material-UI integration
- Use of **Suspense** and **Error Boundaries** to handle loading states and errors
- Deployed on **[Link to deployed app]** (You can update this with your deployment link)

---

## File Structure

Here is an overview of the main project structure and the important files:
```
├───app
│   │   error.tsx                // Custom error boundary for error handling in the application.
│   │   globals.css              // Global CSS styles applied across the application.
│   │   layout.tsx               // Main layout component defining the overall structure of the app.
│   │   page.tsx                 // Main page component that serves as the entry point for the app.
│   │
│   └───fonts
│           GeistMonoVF.woff     // Font files used for styling the application.
│           GeistVF.woff
│
├───components
│   ├───cards
│   │       FileCard.tsx         // Component for displaying individual file details in a card format.
│   │
│   ├───inputs
│   │       Dropdown.tsx         // Dropdown component for sorting options.
│   │
│   └───views
│           GridView.tsx         // Component for rendering a grid layout of items.
│
├───enums
│       sort.ts                  // Enum definitions for sorting options used throughout the app.
│
├───interface
│       components.ts            // TypeScript interfaces for component props.
│       error.ts                 // TypeScript interfaces for error handling.
│       utils.ts                 // TypeScript interfaces for utility functions and responses.
│
├───styles
│       theme.ts                 // Theme configuration and styling options for the application.
│
└───utils
        dataProcessing.ts        // Utility functions for sorting and processing data.
        fileDataExtract.ts       // Utility for loading and parsing CSV file data.
```

### **1. Components**
- **FileCard** (`components/cards/FileCard.tsx`): Displays individual file details such as the file name and creation date.
- **SortDropdown** (`components/inputs/Dropdown.tsx`): Dropdown menu to select the sorting order (Date Asc, Date Desc, Filename Asc, Filename Desc). It's fully integrated with **Material-UI**.
- **GridView** (`components/views/GridView.tsx`): A reusable component for rendering a list of file cards in a grid format, customizable with the number of columns.

### **2. Enums**
- **sort.ts** (`enums/sort.ts`): Contains two enums, `SORT_BY` (with options for date and filename sorting) and `SortOrder` (with ascending and descending options).

### **3. Interfaces**
- **File Interfaces** (`interface/utils.ts`): Defines the TypeScript interfaces for handling the CSV file data structure and component props:
  - `CsvFileDataReadResponse`: Represents the structure of CSV file data with fields like `fileName`, `fileCreatedAt`, and `fileCreatedAtInMillis`.
  - Props interfaces for components: `FileDetailsCardProps`, `GridComponentProps`, `SortDropdownProps`.

### **4. Pages**
- **Home Page** (`pages/index.tsx`): The main page that loads CSV data, handles sorting logic, and renders components using a combination of React hooks (`useState`, `useEffect`, `useCallback`, `useMemo`). It also integrates **Suspense** for lazy-loading components and handles data loading gracefully with a fallback UI.
- **Error Boundary Page** (`pages/error.tsx`): Catches errors during component rendering and displays a user-friendly message, allowing the app to continue running without crashing.
- **Loading Page** (`pages/loading.tsx`): Provides a fallback UI while lazy-loaded components are fetched.

### **5. Utilities**
- **Data Processing Utilities** (`utils/dataProcessing.ts`): Contains the sorting logic. The `sortAlphaNumeric` function sorts data alphabetically or numerically based on the given property (e.g., `fileName`) and sorting order.
- **File Data Extraction** (`utils/fileDataExtract.ts`): Uses **PapaParse** to parse CSV files asynchronously and convert them into a usable array of data.

### **6. Public Data**
- **CSV File** (`public/data/fileData.csv`): A sample CSV file used for testing data loading and displaying in the UI.

---

## Data Loading

Data is loaded asynchronously from the CSV file (`public/data/fileData.csv`) using the **PapaParse** library. PapaParse parses CSV data into JSON format, which is then used in the application for sorting and rendering.

Here’s how data loading is handled:
1. **File Loading**: CSV file is loaded from the public directory.
2. **CSV Parsing**: PapaParse converts the CSV data into an array of JavaScript objects.
3. **Rendering**: The data is rendered using the `FileCard` and `GridComponent`.

**File**: [`utils/fileDataExtract.ts`](utils/fileDataExtract.ts)

---

## Sorting Logic

Sorting logic is abstracted into the `sortAlphaNumeric` function located in the `utils/dataProcessing.ts` file. It allows sorting by multiple properties, such as:
- **Date** (Ascending/Descending)
- **Filename** (Alphabetical, Ascending/Descending)

Sorting is integrated with a dropdown component (`SortDropdown`), which allows the user to dynamically change the sort order.

---

## Supported Libraries

### **Main Libraries**
- **React**: Frontend framework for building user interfaces.
- **Next.js**: React-based framework for server-side rendering and static site generation.
- **TypeScript**: Provides static type checking to improve code quality.
- **Material-UI (MUI)**: UI component library used to build a responsive interface.
- **PapaParse**: Used for parsing CSV files and converting them into JSON format.

### **Other Libraries**
- **Dynamic Imports (Next.js)**: Used to lazily load components, improving performance.
- **Suspense (React)**: Provides fallback UIs while the components are being loaded.
- **Error Boundaries**: Implemented to catch and gracefully handle errors during rendering.

---

## Reusable Components

The following components were built with reusability and scalability in mind:
- **FileDetailsCard** (`components/cards/FileCard.tsx`): This card component can easily be reused for different data types beyond files.
- **GridComponent** (`components/views/GridView.tsx`): The grid component takes any set of items and arranges them in a responsive layout. It’s reusable for any type of data card display.
- **SortDropdown** (`components/inputs/Dropdown.tsx`): A dropdown component designed to handle sorting, can be extended with additional sorting options in the future.

---

## Material-UI Integration

We used **Material-UI (MUI)** to provide a polished and responsive UI. Components like **Typography**, **Box**, and **Grid** from MUI are used to structure the layout and improve user experience. Additionally, the `SortDropdown` leverages MUI's `Select` component for a modern and accessible dropdown interface.

---

## Best Practices Used

- **Lazy Loading**: Components are lazy-loaded using Next.js's dynamic imports with suspense, optimizing the app's load time and performance.
- **Error Boundaries**: Implemented for better error handling, preventing the entire app from crashing when an error occurs.
- **Reusability**: Components are designed to be modular and reusable for other similar data-driven applications.
- **TypeScript**: Strict typing is used throughout the project to catch errors early and improve maintainability.
- **Separation of Concerns**: Utilities, data processing, and component logic are separated into different files for better organization.

---

## Deployment

The app is deployed and can be accessed at: **[Link to deployed app]** (You can update this with your actual deployment URL).

