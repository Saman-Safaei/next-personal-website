import type { FC, ReactNode } from 'react';

export interface ProjectsProps {
  children?: ReactNode;
}

const Projects: FC<ProjectsProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {children}
    </div>
  );
};

export default Projects;
