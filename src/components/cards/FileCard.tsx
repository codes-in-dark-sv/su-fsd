import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FileDetailsCardProps } from '@/interface/components';

const FileDetailsCard: React.FC<FileDetailsCardProps> = ({ date, fileName }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 500, margin: 2, borderRadius: 8 }}>
      <CardContent>
        <Typography variant="body1" component="div">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {fileName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FileDetailsCard;
