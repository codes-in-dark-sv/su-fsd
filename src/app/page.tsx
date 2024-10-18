"use client";

import React, { useState, useEffect } from 'react';
import FileDetailsCard from '@/components/cards/FileCard';
import GridComponent from '@/components/views/GridView';
import SortDropdown from '@/components/inputs/Dropdown';
import { Box, Typography } from '@mui/material';
import { loadCsvData } from '@/utils/fileDataExtract'; 
import { CsvFileDataReadResponse } from '@/interface/utils';

const Home = () => {
  const [fileData, setFileData] = useState<CsvFileDataReadResponse | []>([]);
  const [sortOrder, setSortOrder] = useState('dateAsc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadCsvData('/data/fileData.csv'); 
        setFileData(data);
      } catch (error) {
        console.error('Error loading CSV data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // to be implemented
  };

  const cards = fileData.map((file: CsvFileDataReadResponse, index: number) => (
    <FileDetailsCard key={index} date={file.fileCreatedAt} fileName={file.fileName} />
  ));

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Files
      </Typography>
      <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
      <Box>
        <GridComponent items={cards} columns={2} />
      </Box>
    </Box>
  );
};

export default Home;
