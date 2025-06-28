function firstWord(s) {
  str = s.trim();

  const firstSpaceIndex = str.indexOf(" ");
  if (firstSpaceIndex === -1) {
    return str;
  }
  return str.substring(0, firstSpaceIndex);
}
const s = prompt("Enter String: see and stop");
alert(firstWord(s));
