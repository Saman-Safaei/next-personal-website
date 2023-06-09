import { Inter as CurrentFont } from 'next/font/google';
import type { FC } from 'react';
import Star from '@/components/pages/index/skill/Star';
import useLocale from '@/hooks/useLocale';

const currentFont = CurrentFont({ subsets: ['latin'] });

export interface SkillProps {
  rate: 0 | 1 | 2 | 3;
  title: string;
}

const Skill: FC<SkillProps> = ({ rate, title }) => {
  const { t } = useLocale();
  
  const level =
    rate >= 3
      ? t.skillALevel
      : rate >= 2
      ? t.skillBLevel
      : rate >= 1
      ? t.skillCLevel
      : '';

  const goldenClass = rate >= 3 ? 'golden-text font-bold' : '';

  return (
    <div className='flex flex-col items-center'>
      <h4 className='text-center mb-1.5 text-sm'>
        <span className={`${goldenClass} ${currentFont.className}`}>
          {title}
        </span>{' '}
        <span className='text-gray-400'>- {level}</span>
      </h4>
      <span className='flex flex-row gap-1 text-gray-600'>
        <Star enabled={rate >= 1} />
        <Star enabled={rate >= 2} />
        <Star enabled={rate >= 3} />
      </span>
    </div>
  );
};

export default Skill;
