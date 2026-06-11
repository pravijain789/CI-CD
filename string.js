let a = 10;
let b = 20;

export function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}
