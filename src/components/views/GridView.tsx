import React from 'react';
import { Grid } from '@mui/material';
import { GridComponentProps } from '@/interface/components';

const GridComponent: React.FC<GridComponentProps> = ({ items, columns }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={12 / columns} key={index}>
          {item}
        </Grid>
      ))}
    </Grid>
  );
};

export default GridComponent;
