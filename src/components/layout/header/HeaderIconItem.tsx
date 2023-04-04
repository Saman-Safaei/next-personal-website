import type { FC } from 'react';
import Image from 'next/image';

export interface HeaderIconItem {
  link: string;
  logo: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const HeaderIconItem: FC<HeaderIconItem> = ({
  alt,
  logo,
  link,
  className = 'w-8 h-8',
  priority = false,
}) => (
  <li>
    <a href={link} target='_blank'>
      <Image className={className} src={logo} alt={alt} priority={priority} />
    </a>
  </li>
);

export default HeaderIconItem;
