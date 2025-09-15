import { links } from "../../constants";
import type { INavLinksProps } from "./type";
import { scrollToWithOffset } from "../../utils/scroll-to-with-offset";

export const NavLinks = ({ onScroll }: INavLinksProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToWithOffset(href, 76);
    onScroll();
  };
  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
