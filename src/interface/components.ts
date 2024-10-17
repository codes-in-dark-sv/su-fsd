import React from "react";

export interface FileDetailsCardProps {
  date: string;
  fileName: string;
}

export interface GridComponentProps {
  items: React.ReactNode[];
  columns: number;
}
