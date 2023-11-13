export const sanitize = (s: String): String => {
  return s.toLowerCase().replace(/\s/g, '-').trim();
};
