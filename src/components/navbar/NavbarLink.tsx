import type { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export interface NavbarLinkProps {
  url?: string;
  children?: ReactNode;
}

const NavbarLink: FC<NavbarLinkProps> = ({ url = '/', children }) => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const dynamicClasses = active
    ? 'text-primary-light'
    : 'text-gray-300 hover:text-primary-lighter transition-all duration-300';

  useEffect(() => {
    if (router.isReady) setActive(() => router.asPath === url);
  }, [router.isReady, router.asPath, url]);

  return (
    <li>
      <Link href={url} className={dynamicClasses}>
        {children}
      </Link>
    </li>
  );
};

export default React.memo(NavbarLink);
