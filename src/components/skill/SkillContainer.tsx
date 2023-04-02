import type { FC, ReactNode } from 'react';

export interface SkillContainerProps {
  children?: ReactNode;
}

const SkillContainer: FC<SkillContainerProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3 gap-x-6 gap-y-8'>
      {children}
    </div>
  );
};

export default SkillContainer;
