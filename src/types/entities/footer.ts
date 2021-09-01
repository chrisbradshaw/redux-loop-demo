export interface FooterCategoryLink {
  href: string;
  href_desktop?: string | null;
  text: string;
}

export interface FooterCategory {
  links: FooterCategoryLink[];
  name: string;
}
export interface FooterColumn {
  categories: FooterCategory[];
}

export enum SocialNetworks {
  facebook = "facebook",
  instagram = "instagram",
  youtube = "youtube",
  twitter = "twitter",
}

export type SocialLink = {
  [key in SocialNetworks]?: {
    link: string;
    show: boolean;
  };
};

export interface FooterSocial extends SocialLink {
  title: string;
}

export interface FooterLegalLink {
  route: string;
  title: string;
}

export interface FooterHelpOption {
  image: string;
  quality?: number;
  route: string;
  title: string;
}

export interface FooterLocaleLink {
  code: "CA" | "US";
  route: string;
  title: string;
}

export interface Footer {
  email_capture: {
    default: {
      title: string;
    };
    success: {
      title: string;
    };
    icon: string;
  };
  columns: FooterColumn[];
  social: FooterSocial;
  legal: {
    links: FooterLegalLink[];
  };
  help: {
    links: FooterHelpOption[];
    title: string;
    copy: string;
  };
  countries: {
    links: FooterLocaleLink[];
  };
}
