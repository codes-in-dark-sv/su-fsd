"use server"

import React from 'react';
import FileDetailsCard from "@components/cards/FileCard";
import GridComponent from '@components/views/GridView';

const fileDetails = [
  { date: '2024-10-17', fileName: 'Document1.pdf' },
  { date: '2024-10-16', fileName: 'Image2.png' },
  { date: '2024-10-15', fileName: 'Spreadsheet3.xlsx' },
  { date: '2024-10-14', fileName: 'Presentation4.pptx' },
];

const Home = () => {

  const cards = fileDetails.map((file, index) => (
    <FileDetailsCard key={index} date={file.date} fileName={file.fileName} />
  ));

  return (
    <div>
      <h1>File Details</h1>
      <GridComponent items={cards} columns={2} />
    </div>
  );
};

export default Home;
