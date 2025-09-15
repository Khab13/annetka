type SocialType = "vk" | "in" | "fc";

export interface ISocialLink {
  title: SocialType;
  name: string;
  link: string;
  icon: string;
}

export interface ISocialLinkProps {
  onClick?: (social: ISocialLink) => void;
}
