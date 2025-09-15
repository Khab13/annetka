import { links } from "./constants";
import { Button } from "../../shared/ui/button/Button";
import type { ISocialLinkProps } from "./types";

export const SocialLink = ({ onClick }: ISocialLinkProps) => {
  return (
    <>
      {links.map((link, i) => (
        <div key={i}>
          <Button
            variant="social"
            title={link.title}
            onClick={() => onClick(link)}
          />
        </div>
      ))}
    </>
  );
};
