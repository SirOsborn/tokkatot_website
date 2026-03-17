export const scrollToSection = (id: string, callback?: () => void) => {
  if (callback) callback();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
