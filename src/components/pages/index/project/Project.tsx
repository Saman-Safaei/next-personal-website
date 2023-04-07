import type { FC, ReactNode, MouseEvent } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectProps {
  imageCover: StaticImageData | string;
  imageAlt: string;
  title: string;
  children: ReactNode;
  techStack: string[];
  previewLink?: string;
  gitHubLink?: string;
}

const Project: FC<ProjectProps> = ({
  imageCover,
  imageAlt,
  title,
  children,
  techStack,
  previewLink,
  gitHubLink,
}) => {
  const stackItems = techStack.map(stack => (
    <span
      className='inline-block mr-1 mb-1 bg-gray-700 text-xs py-1 px-2 rounded-full'
      key={stack}>
      {stack}
    </span>
  ));

  const isPreviewEnabled = !!previewLink;
  const isGitHubEnabled = !!gitHubLink;

  const previewClickHandler = (ev: MouseEvent) => {
    if (!isPreviewEnabled) ev.preventDefault();
  };
  const githubClickHandler = (ev: MouseEvent) => {
    if (!isGitHubEnabled) ev.preventDefault();
  };
  return (
    <div className='flex flex-col items-stretch bg-gray-800 rounded-xl border-solid border-gray-800 border-2 overflow-hidden'>
      <div className='w-full shrink-0'>
        <Image
          className='w-full aspect-video object-cover rounded-tr-xl rounded-tl-xl'
          src={imageCover}
          alt={imageAlt}
          width={typeof imageCover === 'string' ? 500 : undefined}
          height={typeof imageCover === 'string' ? 200 : undefined}
        />
      </div>
      <div dir='rtl' className='p-4 flex flex-col items-stretch justify-start gap-3 grow'>
        <h3 className='font-bold text-xl'>{title}</h3>
        <p className='font-light text-justify mb-1'>{children}</p>
        <p className='font-light text-sm' dir='ltr'>
          Tech Stack: {stackItems}
        </p>
      </div>
      <div className='flex justify-between items-center p-4 bg-gray-900/40'>
        <Link
          href={previewLink ?? '#'}
          className={isPreviewEnabled ? '' : 'text-gray-400'}
          onClick={previewClickHandler}
          target='_blank'>
          Preview
        </Link>
        <Link
          href={gitHubLink ?? '#'}
          className={isGitHubEnabled ? '' : 'text-gray-400'}
          onClick={githubClickHandler}
          target='_blank'
          aria-disabled={true}>
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default Project;
