const currentRoute = window.location.pathname;
export const isLinkActive = (href: string) => {
  return currentRoute === href;
};
