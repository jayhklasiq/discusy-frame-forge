
import React from 'react';

interface CourseHeaderProps {
  title: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ title }) => {
  return (
    <header className="bg-discusy-blue text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default CourseHeader;
