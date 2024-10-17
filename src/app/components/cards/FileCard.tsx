import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FileDetailsCardProps } from '@/interface/components';

const FileDetailsCard: React.FC<FileDetailsCardProps> = ({ date, fileName }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 300, margin: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {date}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {fileName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FileDetailsCard;
