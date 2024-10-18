'use client';

import React, { useState, useEffect, useCallback, useMemo, Suspense } from 'react';
import SortDropdown from '@/components/inputs/Dropdown';
import { Box, Typography } from '@mui/material';
import { loadCsvData } from '@/utils/fileDataExtract'; 
import { CsvFileDataReadResponse } from '@/interface/utils';
import { SORT_BY, SortOrder } from '@/enums/sort';
import { sortAlphaNumeric } from '@/utils/dataProcessing';
import dynamic from 'next/dynamic'; 

const FileDetailsCard = dynamic(() => import('@/components/cards/FileCard'), { suspense: true });
const GridComponent = dynamic(() => import('@/components/views/GridView'), { suspense: true });

const Home = () => {
  const [fileData, setFileData] = useState<CsvFileDataReadResponse | []>([]);
  const [sortOrder, setSortOrder] = useState<SORT_BY>(SORT_BY.DATE_ASC);

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

  const sortCsvData = useCallback((data: CsvFileDataReadResponse[], sortBy: SORT_BY) => {
    switch (sortBy) {
      case SORT_BY.DATE_ASC:
        return data.sort((a, b) => a.fileCreatedAtInMillis - b.fileCreatedAtInMillis);
      case SORT_BY.DATE_DESC:
        return data.sort((a, b) => b.fileCreatedAtInMillis - a.fileCreatedAtInMillis);
      case SORT_BY.FILENAME_ASC:
        return sortAlphaNumeric(data, 'fileName', SortOrder.ASCENDING);
      case SORT_BY.FILENAME_DESC:
        return sortAlphaNumeric(data, 'fileName', SortOrder.DESCENDING);
      default:
        return data;
    }
  }, []);

  const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedSort = event.target.value as SORT_BY;
    setSortOrder(selectedSort);
  };

  const sortedFileData = useMemo(
    () => sortCsvData([...fileData], sortOrder),
    [fileData, sortOrder, sortCsvData]
  );

  const cards = sortedFileData.map((file, index) => (
    <FileDetailsCard key={index} date={file.fileCreatedAt} fileName={file.fileName} />
  ));

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Files
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'left', ml: 45 }}>
        <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
      </Box>

      <Suspense fallback={<div>Loading files...</div>}>
        <Box>
          <GridComponent items={cards} columns={2} />
        </Box>
      </Suspense>
    </Box>
  );
};

export default Home;
