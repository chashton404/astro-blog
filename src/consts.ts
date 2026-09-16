export interface LinkItem {
  label: string;
  href: string;
}

export interface FooterItem {
  label: string;
  href?: string;
}

export interface DateFormat {
  locale: string;
  options: Intl.DateTimeFormatOptions;
  template: string;
}

// Site-wide configuration.
export const SITE_TITLE = "Chase's Corner";
export const SITE_DESCRIPTION = "A small, plain blog";
export const SITE_URL = "https://blog.chaseashton.click";
export const SITE_LANG = "en";

export const DATE_FORMAT: DateFormat = {
  locale: "en-GB",
  options: { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" },
  template: "{day} {month}, {year}",
};

export const SITE_FAVICON = "/favicon.png";
// Optional stylesheet in public/, e.g. "/custom.css".
export const CUSTOM_STYLESHEET: string | undefined = undefined;

// Add navigation and footer links here without editing components.
export const NAV_ITEMS: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];
export const FOOTER_ITEMS: FooterItem[] = [
  { label: "Made with care. This is a website upon which I do not plan on using AI. The code and writing will all be done by me, Chase." },
];
