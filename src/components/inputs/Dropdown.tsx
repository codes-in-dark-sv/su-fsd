"use client";

import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {SortDropdownProps} from "@interface/components";

const SortDropdown: React.FC<SortDropdownProps> = ({ sortOrder, onSortChange }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="sortOrder">Sort by</InputLabel>
      <Select
        labelId="sortOrder"
        value={sortOrder}
        onChange={onSortChange}
        label="Sort by"
        displayEmpty
        sx={{ textAlign: 'center' }}
      >
        <MenuItem value="dateAsc">
          <ArrowUpwardIcon fontSize="small" /> Date Ascending
        </MenuItem>
        <MenuItem value="dateDesc">
          <ArrowDownwardIcon fontSize="small" /> Date Descending
        </MenuItem>
        <MenuItem value="fileNameAsc">
          <ArrowUpwardIcon fontSize="small" /> File Name Ascending
        </MenuItem>
        <MenuItem value="fileNameDesc">
          <ArrowDownwardIcon fontSize="small" /> File Name Descending
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
