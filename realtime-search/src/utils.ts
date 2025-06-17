export const sanitizeKey = (key: string): string | null => {
  if (/^[a-zA-Z0-9-\s]$/.test(key)) return key; // Autorise seulement une lettre simple
  if (key === "Backspace") return key;
  return null;
};
