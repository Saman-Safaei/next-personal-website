import type { FC, ReactNode } from "react";

export interface HeaderIconsProps {
  children?: ReactNode;
}

const HeaderIcons: FC<HeaderIconsProps> = ({ children }) => (
  <ul className="flex items-center gap-2">{children}</ul>
);

export default HeaderIcons;
