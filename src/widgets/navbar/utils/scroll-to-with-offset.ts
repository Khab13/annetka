export const scrollToWithOffset = (
  href: string,
  offset: number = 76,
  behavior: ScrollBehavior = "smooth"
) => {
  const id = href.replace("#", "");
  const element = document.getElementById(id);

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior,
    });
  }
};
